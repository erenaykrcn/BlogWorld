from django.shortcuts import render, get_object_or_404, redirect
from .models import Post, Category, Comment, Reply, Like
from django.http import Http404, HttpResponse
from .post_forms import PostForm
from django import forms
from django.utils.text import slugify
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.db import IntegrityError
import random
from datetime import date
from django.contrib.auth.models import User
import math, json


def user_page(request, user_slug):
    user_titles = []
    users_list = User.objects.all()
    for user in users_list:
        user_titles.append(user.username)
    if user_slug in user_titles:
        user = User.objects.get(username=user_slug)
        posts = []
        po = Post.objects.all()
        for post in po:
            if user.username == post.user.username:
                posts.append(post)
            else:
                continue
        print(posts)
        return render(request, "user_page.html", context={"user": user,
                                                          "posts": posts,
                                                          "len": len(posts),
                                                          "ord_nav": True,
                                                          })
    else:
        return HttpResponse("User Not Found")


def post_list(request):
    posts = Post.objects.all()
    posts1 = []
    posts2 = []

    if len(posts) % 4 == 0:
        for i in range(0, int(len(posts) / 2)):
            posts1.append(posts[i])
        for i in range(int(len(posts) / 2), len(posts)):
            posts2.append(posts[i])
    elif len(posts) % 2 == 0:
        for i in range(0, int(len(posts) / 2) + 1):
            posts1.append(posts[i])
        for i in range(int(len(posts) / 2) + 1, len(posts)):
            posts2.append(posts[i])
    else:
        if math.ceil(len(posts) / 2) % 2 == 0:
            for i in range(0, math.ceil(len(posts) / 2)):
                posts1.append(posts[i])
            for i in range(math.ceil(len(posts) / 2 + 1), len(posts)):
                posts2.append(posts[i])
        else:
            for i in range(0, math.ceil(len(posts) / 2) + 1):
                posts1.append(posts[i])
            for i in range(math.ceil((len(posts) / 2) + 1), len(posts)):
                posts2.append(posts[i])

    ids = []
    for post in posts:
        ids.append(post.id)
    ids.sort()

    ord = 0
    numbs = {}
    for id in ids:
        numbs[id] = ord
        ord += 1
    numbs1 = json.dumps(numbs)

    rand_dis = random.choice(posts)
    context = {"posts": posts,
               "rand": rand_dis,
               "rand_cont": rand_dis.content[0:165],
               "boo": True,
               "ord_nav": True,
               "posts1": posts1,
               "posts2": posts2,
               "numbs": numbs1,
               "posts1_len": int(len(posts1) - 1),
               "posts2_len": int(len(posts2) - 1),
               }
    return render(request, "posts_main1.html", context)


def category_list(request, cat_slug):
    postss = []
    id_dict = {
        "world": 1, "technology": 2, "design": 3, "culture": 4, "business": 5, "politics": 6, "opinion": 7,
        "science": 8, "health": 9, "style": 10, "travel": 11}
    cat_id = id_dict[cat_slug]
    print(cat_id)
    cat = Category.objects.get(id=cat_id)
    posts = Post.objects.all()
    for post in posts:
        if post.category.category == cat.category:
            postss.append(post)
        else:
            continue
    ids = []
    for post in postss:
        ids.append(post.id)
    ids.sort()

    ord = 0
    numbs = {}
    for id in ids:
        numbs[id] = ord
        ord += 1
    numbs1 = json.dumps(numbs)
    context = {"posts": postss,
               "boo": False,
               "too": True,
               "cat": cat.category,
               "ord_nav": True,
               "numbs_cat": numbs1,
               }
    return render(request, "posts_main1.html", context)


def user_post(request, user_slug):
    user_titles = []
    users_list = User.objects.all()
    for user in users_list:
        user_titles.append(user.username)
    if user_slug in user_titles:
        postss = []
        posts = Post.objects.all()
        for post in posts:
            if user_slug == post.user.username:
                postss.append(post)
            else:
                continue
        return render(request, "posts_main1.html", context={"posts": postss,
                                                            "boo": False,
                                                            "too": False,
                                                            "uss": True,
                                                            "user": user_slug})
    else:
        return HttpResponse("User Not Found")


def post_details(request, url_slug):
    obj = get_object_or_404(Post, slug=url_slug)
    context = {"object": obj, "ord_nav": True, "no_comments": False}

    for i in range(obj.id + 1, 1999):
        print(i)
        try:
            obj1 = Post.objects.get(id=i)
            context["obj1"] = obj1
            break
        except:
            continue

    if "obj1" in context.keys():
        context["boo"] = True
    else:
        context["boo"] = False

    for i in range(obj.id - 1, 0, -1):
        try:
            obj2 = Post.objects.get(id=i)
            context["obj2"] = obj2
            break
        except:
            continue
    if "obj2" in context.keys():
        context["too"] = True
    else:
        context["too"] = False
    ord = 0
    ids = []
    ids_dict = {}
    post_comments = []
    comments = Comment.objects.all()
    for comment in comments:
        if comment.post.id == obj.id:
            post_comments.append(comment)
            ids.append(comment.id)
    context["comments"] = post_comments
    if len(post_comments) == 0:
        context["no_comments"] = True

    ids.sort()
    ords = []

    all_ids = []
    for comment in Comment.objects.all():
        all_ids.append(comment.id)

    all_ids.sort()

    context["all_ids1"] = all_ids

    for id in ids:
        ids_dict[id] = ord
        ords.append(ord)
        ord += 1

    index = {}
    for ord1 in ords:
        index[ord1] = ids[int(ord1)]

    index_dict = json.dumps(index)
    context["index"] = index_dict
    print(index_dict)

    ids_dictt = json.dumps(ids_dict)
    context["ids"] = ids_dictt

    replies = Reply.objects.all()
    replies_post = []

    for reply in replies:
        if reply.comment.post.id == obj.id:
            replies_post.append(reply)

    context["replies"] = replies_post

    main_reply_dict = {}
    replies_index_id = {}

    reply_ids = []
    for reply in replies_post:
        reply_ids.append(reply.id)

    reply_ids.sort()
    reply_ids_dict = {}
    reply_ids_dict_ord = 0
    for reply_id in reply_ids:
        reply_ids_dict[reply_id] = reply_ids_dict_ord
        replies_index_id[reply_ids_dict_ord] = reply_id
        reply_ids_dict_ord += 1

    allr = []

    for r in Reply.objects.all():
        allr.append(r.id)

    for reply in replies_post:
        main_reply_dict[reply_ids_dict[reply.id]] = ids_dict[reply.comment.id]

    context["main_reply_dict1"] = json.dumps(main_reply_dict)
    context["replies_index_id"] = json.dumps(replies_index_id)
    context["all_reply_ids"] = json.dumps(allr)

    if len(post_comments) > 4:
        context["more"] = True

    likes = []
    for like in Like.objects.all():
        if like.comment.post.id == obj.id:
            likes.append(like)

    likes_dict = {}
    for com in post_comments:
        likes_dict[com.id] = 0

    for like in likes:
        for com in likes_dict.keys():
            if like.comment.id == com:
                likes_dict[com] += 1

    print(likes_dict)

    context["likes_dict"] = json.dumps(likes_dict)

    # com_likes = {
    #
    # comment_id1: [user_id1, user_id2, ...]
    #
    # }
    com_likes = {}

    for comment in post_comments:
        com_likes[comment.id] = []

    for com_id in com_likes.keys():
        for like in likes:
            if like.comment.id == com_id:
                com_likes[com_id].append(like.user.id)

    context["com_likes"] = json.dumps(com_likes)

    try:
        user_info = {}
        user_info["username"] = User.objects.get(username=request.user.username).username
        user_info["prof"] = str(User.objects.get(username=request.user.username).member.prof)
        user_info["user_id"] = int(User.objects.get(username=request.user.username).id)
        context["user_info"] = json.dumps(user_info)
        context["not_authenticated"] = False
        context["post_id"] = obj.id
        return render(request, "post_details.html", context=context)
    except:
        context["not_authenticated"] = True
        return render(request, "post_details_nauth.html", context=context)



@login_required(login_url="/accounts/login/")
def post_create(request):
    today = date.today()
    id_dict = {
        "World": 1, "Technology": 2, "Design": 3, "Culture": 4, "Business": 5, "Politics": 6, "Opinion": 7,
        "Science": 8, "Health": 9, "Style": 10, "Travel": 11}
    try:
        if len(request.POST) > 1:
            print(request.POST)
            obj1 = Post.objects.create(title=request.POST["title"], content=request.POST["content"],
                                       desc=request.POST["desc"], slug=request.POST["slug"])
            if "img_url" in request.POST:
                obj1.thumb = request.POST["img_url"]

            obj1.category = Category(id=1)
            obj1.user = request.user
            obj1.date = today.strftime("%b-%d-%Y")
            obj1.save()
            return HttpResponse("success")
        else:
            user_info = {}
            user_info["username"] = User.objects.get(username=request.user.username).username
            user_info["prof"] = str(User.objects.get(username=request.user.username).member.prof)
            user_info["user_id"] = int(User.objects.get(username=request.user.username).id)
            return render(request, "create.html", context={"boo": False, "ord_nav": True, "user_info": json.dumps(user_info)})
    except IntegrityError:
        return render(request, "create.html", context={"boo:": False, "too": True, "ord_nav": True})


import string


def random_string_generator(size=6, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def create_post(request):
    today = date.today()
    content = request.POST['content']
    title = request.POST['title']
    desc = request.POST['desc']
    cat = request.POST["cat"]
    slug = slugify(title)

    thumb = request.POST['thumb']

    user_id = request.POST['user_id']

    id_dict = {
        "World": 1, "Technology": 2, "Design": 3, "Culture": 4, "Business": 5, "Politics": 6, "Opinion": 7,
        "Science": 8, "Health": 9, "Style": 10, "Travel": 11}

    for post in Post.objects.all():
        if post.slug == slug:
            slug += random_string_generator()

    post = Post.objects.create(
        title=title, slug=slug, content=content, desc=desc, user_id=user_id, thumb=thumb, date=today.strftime("%b-%d-%Y"),
        category_id=id_dict[cat]
    )

    return HttpResponse(slug)


@login_required(login_url="/accounts/login/")
def post_update(request, url_slug):
    obj = get_object_or_404(Post, slug=url_slug)
    id_dict = {
        "World": 1, "Technology": 2, "Design": 3, "Culture": 4, "Business": 5, "Politics": 6, "Opinion": 7,
        "Science": 8, "Health": 9, "Style": 10, "Travel": 11}

    if request.user == obj.user:
        user_info = {}
        user_info["username"] = User.objects.get(username=request.user.username).username
        user_info["prof"] = str(User.objects.get(username=request.user.username).member.prof)
        user_info["user_id"] = int(User.objects.get(username=request.user.username).id)

        return render(request, "update.html", context={"obj": obj,
                                                            "content": json.dumps(obj.content),
                                                            "desc": json.dumps(obj.desc),
                                                            "title": json.dumps(obj.title),
                                                            "thumb": json.dumps(obj.thumb),
                                                            "cat": json.dumps(obj.category.category),
                                                            "ord_nav": True,
                                                            "user_info": json.dumps(user_info),
                                                            "post_id": json.dumps(obj.id),
                                                            })
    else:
        return HttpResponse("You are not authorised")


@login_required()
def sure(request, sure_slug):
    obj = Post.objects.get(slug=sure_slug)
    return render(request, "sure.html", context={
        "slug": sure_slug,
        "title": obj.title,
    })


@login_required()
def delete_completed(request, sure_slug):
    obj = Post.objects.get(slug=sure_slug)
    print(request.POST)
    if len(request.POST) > 0:
        if "True" in request.POST:
            obj.delete()
            return render(request, "comp.html", context={
                "title": obj.title,
                "del": True,
                "not_del": False
            })
        if "False" in request.POST:
            return render(request, "comp.html", context={
                "title": obj.title,
                "del": False,
                "not_del": True
            })
    else:
        return HttpResponse("404")
