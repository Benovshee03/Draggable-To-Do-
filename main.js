$(document).ready(function () {
  $(".adding_new_member").hide();
  $(".adding_new_item").hide();
  // adding members
  $(".add__member").on("click", function () {
    $(".adding_new_member").show();
  });
  $(".cancel_member").on("click", function () {
    $(".adding_new_member").hide();
  });
  //adding item part
  $(".news__item").on("click", function () {
    $(".adding_new_item , main").show();
  });
  $(".cancel").on("click", function () {
    $(".adding_new_item").hide();
  });
  //save member part
  $(".save_member").on("click", function () {
    // $(".name_member").val() = $(".box__name").html()
    addmember();
    $(".adding_new_member").hide();
    $(".new_member").html("New Member");
    $(".upload").html("Upload Image");
  });
  $(".save").on("click", function () {
    if ($(".adding_new_item").html()) {
      $(".adding_new_item").hide();
    }
  });
  $(".cancel").on("click", function () {
    $(".adding_new_item").hide();
  });


});
let members = [
  { name: "Viverra Diam", avatar: "./icons/Avatar.png" },
  { name: "Maecenas Lacus", avatar: "./icons/Avatar (1).png" },
  { name: "Eget Integer", avatar: "./icons/Avatar (2).png" },
  { name: "Nullam Velit", avatar: "./icons/Avatar (3).png" },
];
var image;
var loadFile = function (e) {
  image = $("#output");
  image.src = URL.createObjectURL(e.target.files[0]);
  var text = document.querySelector(".upload");
  text.innerHTML = "";
};
function addmember() {
  var element = document.createElement("img");
  element.setAttribute("class", "output");
  document.getElementsByClassName("accounts")[0].append(element);
  element.src = image.src;
}
var toDos = document.getElementsByClassName("to__do")[0];
toDos.innerHTML = `
                    <div class="box__top">
                        <div class="text">To do</div>
                        <div class="count"></div>
                    </div>
                    <div class="box">
                            <div class="box__title">Mobile Wireframes</div>
                            <div class="box__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …</div>
                            <div class="box__name"> ${members[0].name}</div>
                            <div class="box__line"></div>
                            <div class="box__bottom">
                                <div class="box__date"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0.5C4.5 0.5 0 5 0 10.5C0 16 4.5 20.5 10 20.5C15.5 20.5 20 16 20 10.5C20 5 15.5 0.5 10 0.5ZM14.2 14.7L9 11.5V5.5H10.5V10.7L15 13.4L14.2 14.7Z" fill="#1D2D35"/>
                                    </svg>Mar 4</div>
                                <div class="box__assigner"><img src="./icons/Avatar (1).png" ></div>
                        </div>
                    </div>
`;

function addItem() {
  var selectedItems = document.createElement("div");
  selectedItems.classList.add("cards");
  selectedItems.setAttribute("id", "result");
  document.getElementsByClassName("box")[0].append(selectedItems);
}

// save member part
//   $(".save_member").on("click", function () {
//     $(".name_member").val() = $(".box__name").html()
//   });
//   $(".upload").on("change" , function (){
//     let newimage = $(".accounts").appendTo("img")
//     newimage.attr('src', $(".upload").val())
//   })

//   $(".acoounts").html(`<img src="${`./icons/Avatar.png`}" alt="account__image"/>

//  <img src="./icons/Avatar (1).png">
//  <span></span>`
//     )
//     $(".main").html(
//         `
//         `
//         )

// var loadFile = function(event) {
//     source = URL.createObjectURL(event.target.files[0]);
//   };
//   function addmember() {
//       var element=document.createElement("img")
//       element.setAttribute("class","output")
//       document.getElementsByClassName("imglist")[0].append(element)
//     element.src = source;
//   };
// $(".boxes").

// let addMember = document.getElementsByClassName("add__member")
// let closeMemberButton = document.getElementsByClassName("cancel_member")
// let saveMemberButton = document.getElementsByClassName("save_member")
// let modalMember = document.getElementsByClassName("adding_new_member")

// document.querySelector(".upload").addEventListener(click , ()=>{
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('img');
//             img.onload = () => {
//                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
//             }

//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
// })
