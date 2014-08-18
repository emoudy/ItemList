$(document).ready(function() {
	//make tabs
	
  $(function() {
    $('#top_tabs').tabs();
    $('#delete_task').hide();
  });

	//add to list
	$("#submit_task").click(function() {
		var addNewTask = $('#newTaskDescription').val();
  	if (addNewTask) {
      $('#taskList').append('<div class="currentTask"><input type="checkbox"/>' + addNewTask + '</div>');
			$('#newTaskDescription').val('');
      $('#delete_task').show();
		};
	});

	//remove from list
	$("#delete_task").click(function() {
		$('.currentTask').has('input:checkbox:checked').remove();
	});
});
