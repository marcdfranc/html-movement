jQuery.movement = function (settings) {

	var options = $.extend({
		properties: [{
			name: 'left',
			type: 'linear',
			start_value: 0,
			end_value: 0,
			start_time: 0,
			end_time: 0,
			//elastic_coeficient_in: 1.5,
			//elastic_coeficient_out: 1.5,
			selector: 'div',
			unit: 'px'
		}],
	}, settings);

	$(window).scroll(function (e) {
		options.properties.forEach(property => {
			
			property.curse = property.end_value - property.start_value;
			property.duration = property.end_time - property.start_time;
			if ($(window).scrollTop() >= property.start_time && $(window).scrollTop() <= property.end_time) {
				$(property.selector).css(property.name, calcule(
					property.type,
					property.start_time,
					$(window).scrollTop(),
					property.start_value,
					property.curse,
					property.duration,
					property.elastic_coeficient_in,
					property.elastic_coeficient_out,
					property.unit
				));
			} else if ($(window).scrollTop() < property.start_time) {
				$(property.selector).css(property.name, property.start_value + property.unit);
			} else if ($(window).scrollTop() > property.end_time) {
				$(property.selector).css(property.name, property.end_value + property.unit);
			}
		});

	});

	var calcule = function (type, instant0, instant1, start, curse, duration, elastic_coeficient_in, elastic_coeficient_out, unit) {
		var instant = instant1 - instant0;
		var result = 0;
		if (elastic_coeficient_in == undefined && elastic_coeficient_out == undefined) {
			elastic_coeficient_in = 1.5;
			elastic_coeficient_out = elastic_coeficient_in;
		} else if(elastic_coeficient_in == undefined) {
			elastic_coeficient_in = elastic_coeficient_out;
		} else if (elastic_coeficient_out == undefined) {
			elastic_coeficient_out = elastic_coeficient_in;
		}

		var s = 1.70158;
		var p = 0;
		var a = curse;


		switch (type) {
			case 'ease-in-quadratic':
				instant /= duration;
				result = curse * Math.pow(instant, 2) + start;
				break;

			case 'ease-out-quadratic':
				instant /= duration;
				result = -curse * instant * (instant - 2) + start;
				break;

			case 'ease-in-out-quadratic':
				instant /= duration / 2;
				if (instant < 1) {
					result = curse / 2 * Math.pow(instant, 2) + start;
				} else {
					instant--;
					result = -curse/2 * (instant * (instant - 2) - 1) + start;
				}
				break;

			case 'ease-in-cubic':
				instant /= duration;
				result = curse * Math.pow(instant, 3) + start;
				break;

			case 'ease-out-cubic':
				instant /= duration;
				instant--;
				result = curse * (Math.pow(instant, 3) + 1) + start;
				break;

			case 'ease-in-out-cubic':
				instant /= duration / 2;
				if (instant < 1) {
					result = curse / 2 * Math.pow(instant, 3) + start;
				} else {
					instant -= 2;
					result = curse / 2 * (Math.pow(instant, 3) + 2) + start;
				}
				break;

			case 'ease-in-quartic':
				instant /= duration;
				result = curse * Math.pow(instant, 4) + start;
				break;

			case 'ease-out-quartic':
				instant /= duration;
				instant--;
				result = -curse * (Math.pow(instant, 4) - 1) + start;
				break;

			case 'ease-in-out-quartic':
				instant /= duration / 2;
				if (instant < 1) {
					result = curse / 2 * Math.pow(instant, 4) + start;
				} else {
					instant -= 2;
					result = -curse/2 * (Math.pow(instant, 4) - 2) + start;
				}
				break;

			case 'ease-in-quintic':
				instant /= duration;
				result = curse * Math.pow(instant, 5) + start;
				break;

			case 'ease-out-quintic':
				instant /= duration;
				instant--;
				result = curse * (Math.pow(instant, 5) + 1) + start;
				break;

			case 'ease-in-out-quintic':
				instant /= duration / 2;
				if (instant < 1) {
					result = curse / 2 * Math.pow(instant, 5) + start;
				} else {
					instant -= 2;
					result = curse / 2 * (Math.pow(instant, 5) + 2) + start;
				}
				break;

			case 'ease-in-sinusoid':
				result = curse * Math.cos(instant / duration * (Math.PI / 2)) + curse + start;
				break;

			case 'ease-out-sinusoid':
				result = curse * Math.sin(instant / duration * (Math.PI / 2)) + start;
				break;

			case 'ease-in-out-sinusoid':
				result = -curse/ 2 * (Math.cos(Math.PI * instant/duration) - 1) + start;
				break;

			case 'ease-in-exp':
				result = curse * Math.pow(2, 10 * (instant / duration - 1)) + start;
				break;

			case 'ease-out-exp':
				result = curse * ((Math.pow(2 , (10 * -1) * instant / duration) * -1) + 1) + start;
				break;

			case 'ease-in-out-exp':
				instant /= duration/2;
				if (instant < 1) {
					result = curse/2 * Math.pow(2, 10 * (instant - 1)) + start;
				} else {
					result = curse/2 * ((Math.pow(2, (10 * -1) * instant) * -1) + 2) + start;
				}
				break;

			case 'ease-in-circ':
				instant /= duration;
				result = -curse * (Math.sqrt(1 - Math.pow(instant, 2)) - 1) + start;
				break;

			case 'ease-out-circ':
				instant /= duration;
				instant--;
				result = curse * Math.sqrt(1 - Math.pow(instant, 2)) + start;
				break;

			case 'ease-in-out-circ':
				instant/= duration/2;
				if (instant < 1) {
					result = (curse * -1) / 2 * (Math.sqrt(1 - Math.pow(instant, 2)) - 1) + start;
				} else {
					instant -= 2;
					result = curse/2 * (Math.sqrt(1 - Math.pow(instant, 2)) + 1) + start;
				}
				break;

			case 'ease-in-elastic':
				if (!p) {
					p = duration * 0.3;
				}
				if (a < Math.abs(curse)) {
					a = curse;
					s = p/4;
				} else {
					s = p/(2 * Math.PI) * Math.sin(curse / a);
				}

				instant--;
				result = -(a * Math.pow(2, 10 * instant) * Math.sin((instant * duration - s) * (2 * Math.PI)/p)) + start;
				break;

			case 'ease-out-elastic':
				if (!p) {
					p = duration * 0.3;
				}
				if (a < Math.abs(curse)) {
					a = curse;
					s = p/4;
				} else {
					s = p/(2 * Math.PI) * Math.sin(curse / a);
				}

				result = a * Math.pow(2 , -10 * instant) * Math.sin((instant * duration - s) * (2 * Math.PI)/p) + curse + start;
				break;

			case 'ease-in-out-elastic':
				if (!p) {
					p = duration * (0.3 * 1.5);
				}
				if (a < Math.abs(curse)) {
					a = curse;
					s = p/4;
				} else {
					s = p/(2 * Math.PI) * Math.sin(curse / a);
				}

				if (instant-- < 1) {
					result = -0.5* (a * Math.pow(2, 10 * instant) * Math.sin((instant * duration - s) * (2 * Math.PI)/p)) + start;
				} else {
					result = a * Math.pow(2, 10 * instant) * Math.sin((instant * duration - s) * (2 * Math.PI)/p) * 0.5 + curse + start;
				}
				break;

			case 'ease-in-back':
				instant /= duration;
				result = curse * Math.pow(instant, 2) * ((elastic_coeficient_in + 1) * instant - elastic_coeficient_in) + start;
				break;

			case 'ease-out-back':
				instant /= duration;
				instant--;
				result = curse * (Math.pow(instant, 2) * ((elastic_coeficient_out + 1) * instant + elastic_coeficient_out) + 1) + start;
				break;

			case 'ease-in-out-back':
				instant/= duration/2;
				if (instant < 1) {
					result = curse/2 * Math.pow(instant, 2) * ((elastic_coeficient_in + 1) * instant - elastic_coeficient_in) + start;
				} else {
					//elastic_coeficient*= 1.525;
					instant-= 2;
					result = curse/2 * (Math.pow(instant, 2) * ((elastic_coeficient_out + 1) * instant + elastic_coeficient_out) +2) + start;
				}
				break;

			case 'ease-in-bounce':
				result = easeInBounce(instant, start, curse, duration);
				break;

			case 'ease-out-bounce':
				result = easeOutBounce(instant, start, curse, duration);
				break;

			case 'ease-in-out-bounce':

				if (instant < duration/2) {
					instant*= 2;
					result = easeInBounce(instant, 0, curse, duration) * 0.5 + start;
					
				} else {
					result = easeOutBounce(instant * 2-duration, 0, curse, duration) * 0.5 + curse * 0.5 + start;
				}
				break;

			default:
				result = curse * instant / duration + start;
				break;
		}
		return result + unit;
	};

	var easeOutBounce = function (instant, start, curse, duration) {
		instant /= duration;
		aux = 7.5625;
		if (instant < (1/2.75)) {
			return curse * (aux * Math.pow(instant, 2)) + start;
		} else if(instant < (2/2.75)) {
			instant-= 1.5/2.75;
			return curse*(aux * Math.pow(instant, 2) + 0.75) + start;
		} else if (instant < 2.5/2.75) {
			instant-= 2.25/2.75;
			return curse * (aux * Math.pow(instant, 2) + 0.9375) + start;
		} else {
			instant-= 2.625/2.75;
			return curse * (aux * Math.pow(instant, 2) + 0.984375) + start;
		}
	};

	var easeInBounce = function (instant, start, curse, duration) {
		return curse - easeOutBounce(duration - instant, 0, curse, duration) + start;
	};
};

$.fn.movement = function (settings) {

	var options = $.extend({
		properties: [{
			name: 'left',
			type: 'linear',
			start_value: 0,
			end_value: 0,
			//elastic_coeficient_in: 1.5,
			//elastic_coeficient_out: 1.5,
			unit: 'px'
		}],
		start_time: 0,
		end_time: 0
	}, settings);

	options.duration = options.end_time - options.start_time;

	var element = this;

	var propertiesItens = new Array();

	options.properties.forEach(property => {
		property.start_time = options.start_time;
		property.end_time = options.end_time;
		property.selector = element;
		propertiesItens.push(property);
	});

	$.movement({
        properties: propertiesItens
    });
};




/**s
 * Use cases
 $(function (e) {

	 $.movement({
		 properties: [
			 {
				 selector: '#man',
				 start_time: 424,
				 end_time: 757,
				 name: 'left',
				 // type: 'ease-out-cubic',
				 type: 'ease-out-back',
				 start_value: 20,
				 end_value: 50,
				 elastic_coeficient_in: 1.5,
				 elastic_coeficient_out: 5.5,
				 unit: '%'
				},
				{
					selector: '#man',
					start_time: 424,
					end_time: 757,
					name: 'bottom',
					type: 'ease-out-back',
					elastic_coeficient_out: 3,
					start_value: 110,
					end_value: 240,
					unit: 'px'
				}
			]
		});

		$('#man').movement({
			properties: [
				{
					name: 'left',
					type: 'ease-out-cubic',
					start_value: 20,
					end_value: 50,
					elastic_coeficient_in: 1.5,
					elastic_coeficient_out: 5.5,
					unit: '%'
				},
				{
					name: 'bottom',
					type: 'ease-out-back',
					elastic_coeficient_out: 3,
					start_value: 110,
					end_value: 240,
					unit: 'px'
				}
			],
			start_time: 424,
			end_time: 757
		});
	});

	*/