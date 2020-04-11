
QUnit.test("Movement existis", function (assert) {
	assert.ok(jQuery.movement, "Movement exists");
	assert.ok($.fn.movement, "Movement function exists");
});

QUnit.test("Square at position x",  function (assert) {
	assert.expect(1);
	var done = assert.async();
	
	$.movement({
		properties: [
			{
				selector: '#object',
				start_time: 0,
				end_time: 1348,
				name: 'left',
				type: 'linear',
				start_value: 0,
				end_value: 380,
				unit: 'px'
			   }
		   ]
	   }
	);

	$('html,body').animate({
		scrollTop: 1348
	}, 1348);

	
	setTimeout(function() {
		output = $('#object').offset().left;
		console.log(output);
		assert.equal(output, 388, "Position correct");
		done();
	}, 1500);


});