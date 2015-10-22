var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});


App.Router.map(function() {
  this.route('noivos');
  this.route('local');
  this.route('padrinhos', function () { });
  this.resource('noivos', function() {});
  this.resource('local', function() {});
  this.resource('confirmacao', function () { });
  this.resource('presentes', function () { });
  this.resource('confirmado', function() {});
});

App.LocalController = Ember.ObjectController.extend({
    actions: {
        reloadMap: function(){
                console.log("hey");
        } 
    }
});

App.PadrinhosView = Ember.View.extend({
    templateName: 'padrinhos',
    didInsertElement: function () {
        

        
            $('li img').on('click', function () {
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>';

                //Start of new code
                var index = $(this).parent('li').index();
                var html = '';
                html += img;
                html += '<div style="height:25px;clear:both;display:block;">';
                html += '<a class="controls next" href="' + (index + 2) + '">pr&oacute;ximo</a>';
                html += '<a class="controls previous" href="' + (index) + '">anterior</a>';
                html += '</div>';
                //End of new code

                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function () {
                    $('#myModal .modal-body').html(html);
                })
                $('#myModal').on('hidden.bs.modal', function () {
                    $('#myModal .modal-body').html('');
                });
          

            $(document).on('click', 'a.controls', function () {


                var index = $(this).attr('href');
                var src = $('ul.row li:nth-child(' + index + ') img').attr('src');
                $('.modal-body img').attr('src', src);

                var newPrevIndex = parseInt(index) - 1;
                var newNextIndex = parseInt(newPrevIndex) + 2;

                if ($(this).hasClass('previous')) {
                    $(this).attr('href', newPrevIndex);
                    $('a.next').attr('href', newNextIndex);
                } else {
                    $(this).attr('href', newNextIndex);
                    $('a.previous').attr('href', newPrevIndex);
                }


                //this is where we add our logic
                return false;
            });
        })



    }
});

//App = Ember.Application.create({
//    ready: function () {
//        alert("ads");
//    }
//});





