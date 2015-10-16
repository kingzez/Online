$().ready(function() {
 $("#onlineForm").validate({
        rules: {
    yourname: "required",
    gender: "required",
    home: "required",
    birth: "required",
    college: "required",
    yourclass: "required",
    stu_num: {
        required: true,
        minlength:9,
        maxlength:9
    },
    qq: "required",
    tel: {
        required: true,
        minlength:11,
        maxlength:11
    },
    desire: "required",
    yousay: "required",

  },
        messages: {
    yourname: "请问少侠如何称呼",
    gender: "请输入性别",
    home: "请问少侠来自何方",
    birth: "请问少侠生于何年",
    college: "请问少侠是何学院",
    yourclass: "请问少侠是何专业",
    stu_num: {
    required: "请问少侠学号",
    minlength: jQuery.validator.format("少侠学号不能少于9位哟"),
    maxlength: jQuery.validator.format("少侠学号不能多于9位哟"),
  },
    qq: "请问少侠QQ",
    tel: {
    required: "请输入电话号码，用于接收通知短信",
    minlength: jQuery.validator.format("电话号码不能少于11位哟"),
    maxlength: jQuery.validator.format("电话号码不能多于11位哟"),
  },
    desire: "请输入你的意向",
    yousay: "对我说点什么呢"

  }
    });
});