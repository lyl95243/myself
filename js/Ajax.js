/**
 * Created by dell on 2017/4/24.
 */
function Ajax(url, type, datatype, param, callbackSuccess, callbackErr) {
    $.ajax({
        url: url,
        type: type,
        dataType: datatype,
        data: param,
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        beforeSend: function () {
            $("#loading").fadeIn();
        },
        success: callbackSuccess,
        error: callbackErr,
    });
}
// function ajaxAddOne(){
//     $("#btn_addOne").click(function(){
//         var name=$(".addName").val();
//         var order=$(".addOrder").val();
//         console.log(name);
//         Ajax("","get",
//              "json",{"name":name,"sort":order },
//             function(result) {
//                 if (result.status==200){
//                     setTimeout(function(){
//                         alert("添加成功")
//                         $("#list").html("");
//                         ajaxTree();
//                     },1000)
//                 }
//             },
//             //err函数
//             function (b, msg) {
//                 alert(msg)
//             })
//     })
// }
function  queryStaffList(){
    var queryName;
    var secVal;
    $("#queryName").change(function(){
        queryName=$("#queryName").val();
    })
    secVal=$("#seclectList option:selected").text();
    $("#seclectList").change(function(){
        secVal=$("#seclectList option:selected").text();
        alert(secVal)
    })
    $("#search").click(function(){
        var page= $(".tableList").find("td").eq(7).data("page")
        console.log(page);
        var tb = $(".tableList");
        tb.html("");
        $('#example').html("");
        Ajax("get", "",
            "json",{"name":queryName,"orgName":secVal,"pageNum":page},
            function (result) {
                console.log(result);
                var arr = eval(result.recordList);
                $.each(arr, function (i) {
                    var content = '<td>' + arr[i].id + '</td><td>' + arr[i].uname + '</td><td>' + arr[i].group + '</td><td>' + arr[i].truename + '</td><td>' + arr[i].department + '</td> <td>销售员</td> <td>' + arr[i].remark + '</td> <td data-id="'+ arr[i].id + '" data-groupId="'+ arr[i].groupId + '"  style="font-size:17px" > <a href="#myModalOne" class="edit" data-toggle="modal"><i class="icon-edit" title="编辑"></i> </a> <a href="#myModalTwo" data-toggle="modal"><i class="icon-renren" title="重置密码"></i></a> <a href="#"><i class="icon-refresh" title="设置"></i> </a> <a href="#myModalFour" data-toggle="modal"><i class="icon-remove" title="授权"></i></a> <a href="#myModalFive" data-toggle="modal"><i class="icon-repeat" title="禁用"></i></a> <a href="#myModalSix" data-toggle="modal"><i class="icon-repeat" title="数据授权"></i></a> </td>'
                    var tr = document.createElement("tr");
                    tr.innerHTML = (content);
                    tb.append(tr);
                })
            })
    })
    Ajax( "","get",
         "json","",
       function (result) {
           console.log(result);
       })
}
