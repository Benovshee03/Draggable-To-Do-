$(document).ready(function () {
  var tasks = ["To Do", "In Progress", "In review", "Done"];
  $(".adding_new_member").hide();
  $(".adding_new_item").hide();

  // adding members
  $(".add__member").on("click", function () {
    $(".adding_new_member").show();
  });

  $(".cancel_member").on("click", function () {
    $(".adding_new_member").hide();
    $(".adding_new_member input").val("");
  });

  // save member part
  $(".save_member").on("click", function () {
    var memberData = {
      name: $(".name_member").val(),
      avatar: "./icons/Avatar.png",
    };

    $.ajax({
      url: "http://localhost:3000/members",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(memberData),
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err);
      },
    });

    loadMembers();

    $(".adding_new_member").hide();
    $(".new_member").html("New Member");
    $(".upload").html("Upload Image");
  });
  tasks.map((e) => {
    $(".assign").append(` <option class="option" value=${e}>${e}</option>`);
  });
  // Adding item part
  $(".news__item").on("click", function () {
    $(".adding_new_item, main").show();

    $("main").css("opacity", "0.3");
    $.ajax({
      url: "http://localhost:3000/members",
      type: "GET",
      contentType: "application/json",
      success: function (data) {
        data.map((e) => {
          $("#name").append(`<option>${e.name}</option>`);
          var optionsContent = [];
$("option").each(function() {
    optionsContent.push($(this).html());
});
console.log(optionsContent);
        });
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  $(".cancel").on("click", function () {
    $(".adding_new_item").hide();
    $("main").css("opacity", "1");
  });

  $(".save").on("click", function () {
    if ($("#name").html() && $(".description").val()) {
      $(".adding_new_item").hide();
      $("main").css("opacity", "1");
      var itemData = {
        name: $("#name option:selected").text(),
        description: $(".description").val(),
        date: $(".date").val(),
        type: $(".assign option:selected").text(),
      };

      console.log(itemData);
      $.ajax({
        url: "http://localhost:3000/items",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(itemData),
        success: function (data) {
          console.log(data);
          // Burada yeni eklenen öğeyi doğru kutuya yerleştirme işlemini yapabilirsiniz.
          placeItemInCorrectBox(itemData);
        },
        error: function (err) {
          console.log(err);
        },
      });
    } else {
      alert("Please right information to the empty places!");
    }
  });

function placeItemInCorrectBox(itemData) {

}


  $.ajax({
    url: "http://localhost:3000/items",
    type: "GET",
    contentType: "application/json",
    success: function (data) {
      data.map((e) => {
        console.log(e);
        if (e.type === "To Do") {
          $(".to__do ").append(`
          <div class="box" draggable="true">
            <div class="box__title">Mobile Wireframes</div>
            <div class="box__description">${e.description}</div>
            <div class="box__name">${e.name}</div>
            <div class="box__line"></div>
            </div>
          `);
        } else if (e.type === "In Progress") {
          $(".in__progress ").append(`
          <div class="box" draggable="true">
            <div class="box__title">Mobile Wireframes</div>
            <div class="box__description">${e.description}</div>
            <div class="box__name">${e.name}</div>
            <div class="box__line"></div>
            </div
          `);
        } else if (e.type === "In review") {
          $(".in__review ").append(`
          <div class="box" draggable="true">
            <div class="box__title">Mobile Wireframes</div>
            <div class="box__description">${e.description}</div>
            <div class="box__name">${e.name}</div>
            <div class="box__line"></div>
            </div>
          `);
        } else if (e.type === "Done") {
          $(".done ").append(`
          <div class="box" draggable="true">
            <div class="box__title">Mobile Wireframes</div>
            <div class="box__description">${e.description}</div>
            <div class="box__name">${e.name}</div>
            <div class="box__line"></div>
            </div>
          `);
        }
      });
    },
    error: function (err) {
      console.log(err);
    },
  });
  function loadMembers() {
    $.get("http://localhost:3000/members", function (data) {
      $(".accounts").empty(); //
      data.forEach(function (member) {
        $(".accounts").append(`
          <span>
            <img src="${member.avatar}" alt="${member.name}">
          </span>
        `);
        $("#name").append(`<option value="">${member.name}</option>`);
      });
    });
  }

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

//Draggable---------------------------------------------------
document.querySelectorAll('.box').forEach(item =>
  item.addEventListener('dragstart', dragStart)
);

const toDoBox = document.querySelector('.to__do')
const progressBox=document.querySelector('.in__progress')
const reviewBox = document.querySelector('.in__review')
const doneBox = document.querySelector('.done')

var mainBoxes = document.querySelectorAll('.main__box');
mainBoxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
});
function dragStart(event) {
  event.dataTransfer.setData('text', event.target.id)
}
function dragOver(event) {
  event.preventDefault();  // varsayılan işlemlerini engelle
  event.dataTransfer.dropEffect = 'move'; // imlecin şeklini değiştir
  document.title = "dragOver: " + event.target.id;
}
function drop(event) {

  event.preventDefault();
  const droppedItemId = event.dataTransfer.getData('text');
  // document.title = event.target.id + " - " + droppedItemId;
  const droppedItem = document.getElementById(droppedItemId);

  if (droppedItem) {
      event.target.appendChild(droppedItem);
  }
}
