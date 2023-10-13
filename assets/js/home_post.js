// {
// let createPost = () => {
//     const newPost = $('#create-post');
//     newPost.submit(function(e) {
//       e.preventDefault();
//       // Now, how to submit
//       $.ajax({
//         type: 'post',
//         url: "/post/posts",
//         data: newPost.serialize(), 
//         success: function(data) { 
//           console.log(data);
//           const newPostElement = newDom(data.data.post);
//         // console.log('done');
       
//         $('#post_container>ul').prepend(newPostElement);
//         },
//         error: function(error) {
//           console.log(error.responseText);
//         }
//       });
//     });
//   }


//   let newDom = function(post){
//     return $(`<li id="post_${p.id}">
    
//         <a href="/post/destroy/${ p.id }"  class="common-class-delete"> Delete</a>
    
//     <div class="content">
//     ${p.Content }
//     </div>
//     <div class="username">
//     ${ p.User.Name }
//     </div>
      
//     <div>
//     <form action="/comment/create" method="post">
//         <input type="text" name="comment" placeholder="Comments">
//         <input type="hidden" name="post" value="${p._id }">
//         <input type="submit" value="Comment">
//     </form>
// </div>




// </li>`)
//   }
  
//   createPost();
// }

// $(document).ready(function () {
//   let createPost = () => {
//     const newPost = $('#create-post');
//     newPost.submit(function (e) {
//       e.preventDefault();
//       // Now, how to submit
//       $.ajax({
//         type: 'post',
//         url: "/post/posts",
//         data: newPost.serialize(),
//         success: function (data) {
//           console.log(data);
//           const newPostElement = newDom(data.data.post);
//           $('#post_container>ul').prepend(newPostElement);
//         },
//         error: function (error) {
//           console.log(error.responseText);
//         }
//       });
//     });
//   }

//   let newDom = function (p) {
//     return $(`<li id="post_${p.id}">
//         <a href="/post/destroy/${p.id}" class="common-class-delete"> Delete</a>
//         <div class="content">
//           ${p.Content}
//         </div>
//         <div class="username">
//           ${p.User.Name}
//         </div>
//         <div>
//           <form action="/comment/create" method="post">
//             <input type="text" name="comment" placeholder="Comments">
//             <input type="hidden" name="post" value="${p._id}">
//             <input type="submit" value="Comment">
//           </form>
//         </div>
//       </li>`);
//   }

//   createPost();
// });
