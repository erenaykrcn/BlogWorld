from django.http import HttpResponse
from django.shortcuts import render
from blog_posts.models import *
from django.contrib.auth.models import User
from blog_posts.models import Post, Comment, Reply, Like
from django.core.files.storage import FileSystemStorage
from accounts.models import Member
from django.contrib.auth import login
from django.contrib.auth.hashers import check_password
from django.core.files.storage import default_storage
from datetime import date

today = date.today()

def home_page(request):
    print(request.user)
    postss = Post.objects.all()
    posts_culture = []
    for post in postss:
        if post.category.category == "Culture":
            posts_culture.append(post)
    return render(request, "Homepage.html", context={
                                            "posts": posts_culture,
                                            "ord_nav": False,
    })


def about_page(request):
    dic = {"items": ["Name: Erenay", "Surname: Karacan", "Institution: Middle East Technical University",
                     "E-mail: erenaykrcn@hotmail.com"],
           "ord_nav": True,}
    return render(request, "portfolio.html",
                  dic)


def search(request):
    print(request.POST)
    el = request.POST["elem"]
    posts = Post.objects.filter(title__icontains=el)
    filt_items = len(posts)
    context = {"posts": posts, "fil": el, "len": filt_items, "ord_nav": True}
    return render(request, "search.html", context)


def insert(request):
    print("DEBUGGGG")
    comment = Comment(content=request.POST['content'], user_id=request.POST['user_id'], post_id=request.POST['post_id'],
                      date=today)
    comment.save()


def reply(request):
    print(" we ARE IN")
    reply = Reply(content=request.POST['content'], user_id=request.POST['user_id'], comment_id=request.POST['comment_id'])
    reply.save()
    return HttpResponse(" ")


def delete(request):
    print("we are here")
    comment = Comment.objects.get(id=request.POST["comment_id"])
    comment.delete()
    return HttpResponse("success")


def delete_rep(request):
    reply = Reply.objects.get(id=request.POST["reply_id"])
    reply.delete()
    return HttpResponse("success")


def like(request):
    like = Like(comment_id=request.POST["comment_id"], user_id=request.POST["user_id"])
    like.save()
    return HttpResponse("response")


def unlike(request):
    unlike = Like.objects.get(comment_id=request.POST["comment_id"], user_id=request.POST["user_id"])
    unlike.delete()
    return HttpResponse("sdf")


def upload_thumb(request):

    file = request.FILES["file"]

    file_name = default_storage.save(file.name, file)
    file = default_storage.open(file_name)
    file_url = default_storage.url(file_name)

    return HttpResponse(file_url)


from django.utils.text import slugify
import string, random


def random_string_generator(size=6, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def update_post(request):
    id_dict = {
        "World": 1, "Technology": 2, "Design": 3, "Culture": 4, "Business": 5, "Politics": 6, "Opinion": 7,
        "Science": 8, "Health": 9, "Style": 10, "Travel": 11}

    print(request.POST)
    post_id = request.POST['post_id']
    post = Post.objects.get(id=int(post_id))
    title = request.POST['title']

    if title != post.id:
        slug = slugify(title)
        post.slug = slug

    content = request.POST['content']
    desc = request.POST['desc']
    cat = request.POST["cat"]
    thumb = request.POST['thumb']

    post.content = content
    post.desc = desc
    post.category_id = id_dict[cat]
    post.thumb = thumb
    post.save()

    return HttpResponse("Hey")


def update_profile(request):
    unnumb = 0
    username = request.POST['username']
    for user in User.objects.all():
        if user.username == username:
            unnumb += 1

    if username != request.user.username:
        if unnumb > 0:
            return HttpResponse("username exception")

    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    gender = request.POST['gend']
    tel = "+" + request.POST['cc'] + request.POST['tel']
    birthdate = request.POST['bd']

    obj = User.objects.get(username=request.user.username)
    obj.first_name = first_name
    obj.last_name = last_name
    obj.save()

    obj_member = Member.objects.get(user=request.user)
    obj_member.gender = gender
    obj_member.tel = tel
    obj_member.birthdate = birthdate
    obj_member.save()

    return HttpResponse("true")


def create_user(request):
    username = request.POST['username']
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    email = request.POST['email']
    tel = request.POST['tel']
    birthdate = request.POST['birthdate']
    password1=request.POST['password']


    user = User.objects.create_user(username=username, first_name=first_name, last_name=last_name, email=email, password=password1)
    user.save()

    member = Member.objects.create(user=user)
    member.tel = tel
    member.birtdate = birthdate

    login(request, user)
    return HttpResponse("crated")


def check_username(request):
    if 'username' in request.POST.keys():
        username = request.POST['username']
        for user in User.objects.all():
            if user.username == username:
                return HttpResponse("username exception")

        return HttpResponse("success")

    if 'email' in request.POST.keys():
        email = request.POST['email']
        for user in User.objects.all():
            if user.email == email:
                return HttpResponse("username exception")
        return HttpResponse("success")


def login_aa(request):
    print("aAAAAA")
    try:
        user = User.objects.get(username=request.POST['username'])
        if check_password(request.POST['password'], user.password):
            login(request, user)
            return HttpResponse("success")
        else:
            return HttpResponse("exception")
    except:
        return  HttpResponse("exception")
