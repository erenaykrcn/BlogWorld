from django.shortcuts import render
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.views import PasswordResetConfirmView as Link
from django.utils.text import slugify
import random
import string
from accounts.models import Reset_Url
from django.http import HttpResponse
from blog_posts.models import Post
from django.core.files.storage import FileSystemStorage
from django.contrib.auth import login
import json
from django.core.files.storage import default_storage


def profile_page(request):
    if "hey" in request.POST:
        my_form = request.POST
        log_user = User.objects.get(username=my_form["username"])
        login(request, log_user)
        posts = []
        user = log_user
        po = Post.objects.all()
        for post in po:
            if post.user.username == user.username:
                posts.append(post)
            else:
                continue
        return render(request, "profile_page.html", context={
            "posts": posts,
            "len": len(posts),
            "new_account": True,
            "ord_nav": True,
        })

    posts = []
    user = request.user
    po = Post.objects.all()

    for post in po:
        if post.user.username == user.username:
            posts.append(post)
        else:
            continue

    if request.method != "POST":
        return render(request, "profile_page.html", context={
            "posts": posts,
            "len": len(posts),
            "ord_nav": True,
        })
    else:
        if "profi" in request.FILES.keys():


            file = request.FILES["profi"]

            file_name = default_storage.save(file.name, file)
            file = default_storage.open(file_name)
            file_url = default_storage.url(file_name)

            user.member.prof = file_url
            user.member.save()

            return render(request, "profile_page.html", context={
                    "posts": posts,
                    "a": True,
                    "len": len(posts),
                    "ord_nav": True,
                })
        if "wall_photo" in request.FILES.keys():
            file = request.FILES["wall_photo"]

            file_name = default_storage.save(file.name, file)
            file = default_storage.open(file_name)
            file_url = default_storage.url(file_name)

            user.member.wall = file_url
            user.member.save()

            return render(request, "profile_page.html", context={
                "posts": posts,
                "b": True,
                "len": len(posts),
                "ord_nav": True,
            })


def edit(request):
    context = {'ord_nav': True}
    context["user"] = request.user
    tel = request.user.member.tel
    print(tel)
    if tel != "":
        context["tel"] = json.dumps(tel[-10:])
        context["country_code"] = json.dumps(tel[1:-10])

    print(context["country_code"])
    print(context["tel"])

    bd = request.user.member.birthdate
    if bd != "":
        context["bd"] = json.dumps(bd)

    gend = request.user.member.gender
    if gend != "":
        context["gend"] = json.dumps(gend)

    return render(request, 'edit.html', context=context)


def signup(request):

    return render(request, "signup.html", context={"ord_nav": True})



def changepass(request):
    u = User.objects.get(id=request.user.id)
    boo = False
    oldpa= True
    print(request.user.password)
    if len(request.POST) > 1:
        if u.check_password(request.POST['old_password']):
            if request.POST["password"] != request.POST["re_password"]:
                return render(request, "changepass.html", context={"boo": boo,
                                                                   "pass": False
                                                                   })
            passnew = request.POST["password"]
            u = User.objects.get(username=request.user)
            u.set_password(passnew)
            u.save()
            boo = True
        else:
            oldpa = False
    return render(request, "changepass.html", context={"boo": boo,
                                                       "pass": True,
                                                       "oldpa": oldpa,
                                                       'ord_nav': True,
                                                       })


def reset(request):
    return render(request, "reset.html", context={'ord_nav': True,
    })


def random_string_generator(size=15, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def reset_done(request):
    print(request.POST)
    exist = False
    if "email" in request.POST:
        exist = True
        email = request.POST["email"]
        users = User.objects.all()
        for user in users:
            print(user.email)
            if email == str(user.email):
                vi = Link()
                print(vi.get_form_kwargs)
                url = "http://127.0.0.1:8000/accounts/" + slugify(random_string_generator()) + "/"
                ul = Reset_Url()
                ul.slug = url
                ul.username = user.username
                ul.save()
                name = user.username
                subject = 'Password reset on 127.0.0.1:8000'
                message = "You're receiving this email because you requested a password reset for your user account at \n127.0.0.1:8000.\n" \
                          "Please go to the following page and choose a new password:\n" \
                          f"{url}" \
                          f"\n\nYour username, in case you've forgotten: \n{name}\n" \
                          "\nThanks for using our site!" \
                          "\nThe 127.0.0.1:8000 team"
                email_from = settings.EMAIL_HOST_USER
                recipient_list = [f'{email}', ]
                send_mail(subject, message, email_from, recipient_list)
                return render(request, "reset_done.html", context={'ord_nav': True,
                })
    return render(request, "reset.html", context={
        "exist": exist, 'ord_nav': True,
    })


def reset_page(request, reset_url):
    print([i.slug for i in Reset_Url.objects.all()])
    for ob in Reset_Url.objects.all():
        print(ob.slug)
        global link
        link = "http://127.0.0.1:8000/accounts/" + reset_url + "/"
        if str(ob.slug) == link:
            return render(request, "reset_confirm.html", context={
                "validlink": ob.is_active, 'ord_nav': True,
            })
    else:
        return HttpResponse("Wrong")


def reset_complete(request):
    if len(request.POST) > 1:
        if request.POST["password"] == request.POST["re_password"]:
            link_obj = Reset_Url.objects.get(slug=link)
            print(link_obj.username)
            user = User.objects.get(username=link_obj.username)
            print(user.username)
            print(user.email)
            user.set_password(request.POST["password"])
            user.save()
            link_obj.is_active = False
            link_obj.save()
            return render(request, "reset_complete.html", context={'ord_nav': True,
            })
        else:
            return render(request, "reset_confirm.html", context={'ord_nav': True,
                "validlink": True,
                "iden": True
            })
    else:
        return HttpResponse("404")


def account(request):
    return HttpResponse("121")


def login_a(request):
    return render(request, 'login.html', context={
            'ord_nav': True,
            })

