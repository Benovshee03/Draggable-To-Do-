
//New member
// 1.db json-a post etsin
// 2.upload olunan shekili save elesin accaoutun icindeki spanin icine
// 3.Inputlarin ici dolu olmasa save ede bilmesin
// 4.
$(document).ready(function () {
  $(".adding_new_member").hide();
  $(".adding_new_item").hide();
  
  // adding members
  $(".add__member").on("click", function () {
    $(".adding_new_member").show();
  });
  
  $(".cancel_member").on("click", function () {
    $(".adding_new_member").hide();
    $(".adding_new_member input").val('');
  });

  // save member part
  $(".save_member").on("click", function () {
    var memberData = {
      "name": $('.name_member').val(),
      "avatar": "./icons/Avatar.png"
    };

    $.ajax({
      url: 'http://localhost:3000/members',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(memberData),
      success: function (data) {
        console.log(data);
        // Burada gelen veriyi işleyebilirsiniz
      },
      error: function (err) {
        console.log(err);
      },
    });

    // İsteği gönderdikten sonra üyeleri yeniden yükle
    loadMembers();
    
    $(".adding_new_member").hide();
    $(".new_member").html("New Member");
    $(".upload").html("Upload Image");
  });

  // Adding item part
  $(".news__item").on("click", function () {
    $(".adding_new_item, main").show();
  });
  
  $(".cancel").on("click", function () {
    $(".adding_new_item").hide();
  });

  $(".save").on("click", function () {
    if ($(".adding_new_item").html()) {
      $(".adding_new_item").hide();
    }
  });

  $(".cancel").on("click", function () {
    $(".adding_new_item").hide();
  });

  // Üyeleri yükleme işlemi
  function loadMembers() {
    $.get("http://localhost:3000/members", function (data) {
      $(".accounts").empty(); // Önceki üyeleri temizle
      // Her bir üye için döngü oluştur
      data.forEach(function (member) {
        // Üye bilgilerini ekranda görüntüle
        $(".accounts").append(`
          <span>
            <img src="${member.avatar}" alt="${member.name}">
          </span>
        `);
  $('#name').append(
    `<option value="">${member.name}</option>`
    )
      });
    });
  }

  // Sayfa yüklendiğinde üyeleri yükle
  loadMembers();
  $(".upload").on("change", function () {
    var input = this;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var image = $("<img>").attr("src", e.target.result);
        $(".accounts").append(image);
      };
      reader.readAsDataURL(input.files[0]);
    }
  });

});


// var image;
// var loadFile = function (e) {
//   image = $("#output");
//   image.src = URL.createObjectURL(e.target.files[0]);
//   var text = document.querySelector(".upload");
//   text.innerHTML = "";
// };

// function addmember() {
//   var element = document.createElement("img");
//   element.setAttribute("class", "output");
//   document.getElementsByClassName("accounts")[0].append(element);
//   element.src = image.src;
// }






// var toDos = document.getElementsByClassName("to__do")[0];
// toDos.innerHTML = `
//                     <div class="box">
//                             <div class="box__title">Mobile Wireframes</div>
//                             <div class="box__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …</div>
//                             <div class="box__name"> ${members[0].name}</div>
//                             <div class="box__line"></div>
//                             <div class="box__bottom">
//                                 <div class="box__date"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M10 0.5C4.5 0.5 0 5 0 10.5C0 16 4.5 20.5 10 20.5C15.5 20.5 20 16 20 10.5C20 5 15.5 0.5 10 0.5ZM14.2 14.7L9 11.5V5.5H10.5V10.7L15 13.4L14.2 14.7Z" fill="#1D2D35"/>
//                                     </svg>Mar 4</div>
//                                 <div class="box__assigner"><img src="./icons/Avatar (1).png" ></div>
//                         </div>
//                     </div>
// `;

// function addItem() {
//   var selectedItems = document.createElement("div");
//   selectedItems.classList.add("cards");
//   selectedItems.setAttribute("id", "result");
//   document.getElementsByClassName("box")[0].append(selectedItems);
// }

// save member part
//   $(".save_member").on("click", function () {
//     $(".name_member").val() = $(".box__name").html()
//   });


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






//Draggable---------------------------------------------------
// document.querySelectorAll('.box').forEach(item =>
//   item.addEventListener('dragstart', dragStart)
// );

// const toDoBox = document.querySelector('.to__do')
// const progressBox=document.querySelector('.in__progress')
// const reviewBox = document.querySelector('.in__review')
// const doneBox = document.querySelector('.done')

// var mainBoxes = document.querySelectorAll('.main__box');
// mainBoxes.forEach(box => {
//     box.addEventListener('dragover', dragOver);
//     box.addEventListener('drop', drop);
// });
// function dragStart(event) {
//   event.dataTransfer.setData('text', event.target.id)
// }
// function dragOver(event) {
//   event.preventDefault();  // varsayılan işlemlerini engelle
//   event.dataTransfer.dropEffect = 'move'; // imlecin şeklini değiştir
//   document.title = "dragOver: " + event.target.id;
// }
// function drop(event) {

//   event.preventDefault();
//   const droppedItemId = event.dataTransfer.getData('text');
//   // document.title = event.target.id + " - " + droppedItemId;
//   const droppedItem = document.getElementById(droppedItemId);

//   if (droppedItem) {
//       event.target.appendChild(droppedItem);
//   }
// }


