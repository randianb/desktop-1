export function contextMenu(x, y, tpl){
    let _ctxTpl;_ctxTpl = $("<div class='wc__contextmenu anim-fadeIn'></div>");
    if(!$(".wc__contextmenu").length){$("body").append(_ctxTpl.html(tpl));
    }else{$(".wc__contextmenu").hide().html(tpl).fadeIn(250);
    }
    $(".wc__contextmenu").css({ position: "absolute", left: x, top: y });
}

$(function(){
    $(document).on("click", function(e){
        let _ctxMenu = $(".wc__contextmenu");
        if($(e.target).hasClass("J__onlineStatus")) return;
        if($(e.target).hasClass("J__avator")) return;
        if(_ctxMenu.length && e.target != _ctxMenu && !$.contains(_ctxMenu[0], e.target)){
            _ctxMenu.hide();$(".vChat__main").find("li .msg").removeClass("taped");
        }
        // 隐藏表情框
        let _chooseBox = $(".wc__choose-panel");
        if($(e.target).hasClass("btn-face")) return;
        if(_chooseBox.length && e.target != _chooseBox && !$.contains(_chooseBox[0], e.target)){
            _chooseBox.hide();
        }
    });

    $("body").on("contextmenu", ".J__recordList li", function(e){
        e.preventDefault();
        let eX = e.pageX, eY = e.pageY, _tpl;
        _tpl = `<div class='wc__contextmenuRecordChat menu'>
            <a href='#'>置顶</a>
            <a href='#'>消息免打扰</a>
            <a href='#'>在独立窗口中打开</a>
            <a class='deliver'></a>
            <a href='#'>删除聊天</a>
            </div>
        `;
        contextMenu(eX, eY, _tpl);
    });

    $("body").on("contextmenu", ".J__addrFriendList .row:not(.unCTX)", function(e){
        e.preventDefault();
        let eX = e.pageX, eY = e.pageY, _tpl;
        _tpl = `<div class='wc__contextmenuRecordChat menu'>
         <a href='#'>发消息</a>
         <a class='deliver'></a>
         <a href='#'>删除好友</a>
         </div>
        `;
        contextMenu(eX, eY, _tpl);
    });

    $("body").on("contextmenu", "#J__chatMsgList li .avatar", function(e){
        e.preventDefault();
        let eX = e.pageX, eY = e.pageY, _tpl;
        _tpl = `<div class='wc__contextmenuRecordChat menu'>
         <a href='#'>@他/她</a>
         <a href='#'>禁言</a>
         <a class='deliver'></a>
         <a href='#'>移除群聊</a></div>
        `;
        contextMenu(eX, eY, _tpl);
    });

    // 右键（聊天消息区）
    $("body").on("contextmenu", "#J__chatMsgList li .msg", function(e){
        e.preventDefault();
        let eX = e.pageX, eY = e.pageY, _tpl;
        let that = $(this);
        that.addClass("taped");
        that.parents("li").siblings().find(".msg").removeClass("taped");
        let isRevoke = that.parents("li").hasClass("me");
        let _revoke = isRevoke ? "<a href='#'>撤回</a>" : "";
        if (that.hasClass("picture")) {
            _tpl = `<div class='wc__contextmenuMsgChat menu'>
                 <a href='#'>发送给朋友</a>
                <a href='#'>复制</a>
                    <a href='#'>转发</a>
                 <a href='#'>收藏</a>
                    <a href='#'>另存为</a>
                    `+ _revoke +`
                 <a href='#'>删除</a></div>
            `;
        } else if (that.hasClass("video")) {
            _tpl = `<div class='wc__contextmenuMsgChat menu'>
                  <a href='#'>发送给朋友</a>
             <a href='#'>转发</a>
             <a href='#'>另存为</a>
                    `+ _revoke +`
                    <a href='#'>删除</a>
        </div>
            `;
        } else {
            _tpl = `<div class='wc__contextmenuMsgChat menu'>
            <a href='#'>发送给朋友</a>
             <a href='#'>复制</a>
             <a href='#'>收藏</a>
                    `+ _revoke +`
            <a href='#'>删除</a>
         </div>
            `;
        }
        contextMenu(eX, eY, _tpl);
    });
});
