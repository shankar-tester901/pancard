// // YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
// async function uploadfile() {

//     try {
//         var file = document.getElementById("customFile").files[0];
//         let fileObj = new FormData();
//         fileObj.append("data", file);
//         const response = await fetch("/server/file_operations/uploadFile", { method: "POST", body: fileObj })
//         const data = await response.json();
//         if (response.status === 200) {
//             document.getElementById("status").innerHTML = data.message;
//             alert(data.message)
//             setTimeout(function() {
//                 window.location.reload();
//             }, 2000);
//         }
//     } catch (e) {
//         console.log(e);
//         alert("Error. Please try again after sometime.");
//     }
// }