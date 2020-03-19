import ReactDOM from "react-dom"
import React from "react"


function AddComment() {

    ReactDOM.render(
        '<div class="c-main w3-animate-left">' +
        '<div class="c-card">' +
        '<div class="c-card-in"><div class="c-date"><div class="c-date-date">FEB-29 2020</div><div class="c-date-delete" ' +
        'onclick="delete_comment(\'{{comment.id}}\')"><button class="delete-but"><i class="fas fa-trash delete-ext"></i></button></div>' +
        '</div><div class="c-cont">{{comment.content|linebreaks}}</div><button class="see-replies-font" ' +
        'onclick="see_replies(\'{{comment.id}}\')">See Replies</button><div class="c-menu">' +
        '<button class="c-like" onclick="like(\'{{comment.id}}\')"><i class="far fa-thumbs-up" style="color: white; ' +
        'font-size: 2vw"></i><div class="like_numb"></div></button>' +
        '<button class="c-reply" onclick="see_replies(\'{{comment.id}}\')"><i class="fa fa-reply" aria-hidden="true" ' +
        'style="color: white; font-size: 2vw"></i>' +
        '</button></div><div class="reply-div w3-animate-top"><div class="loop_reply"><div class="reply-mes"><button ' +
        'class="delete-but" onclick="delete_reply(\'{{reply.id}}\')"><i class="fas fa-trash delete-ext"></i></button><div ' +
        'class="reply-cont">{{reply.content|linebreaks}}</div><img class="reply-pad" src="{{reply.user.member.prof}}"></div>' +
        '</div><div class="send-reply"><textarea name="cont-reply" id="" cols="30" rows="5" class="ta-reply"></textarea><button ' +
        'class="reply-but" type="button" onclick="send_reply(\'{{comment.id}}\')">SEND</button></div></div></div></div>' +
        '<div class="c-prof"><img src="{{comment.user.member.prof}}" alt="" class="c-pad"><div class="c-username"><b>' +
        '{{comment.user.username}}</b></div></div></div>',
        document.getElementById("react_root")
    );
}