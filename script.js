function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue === '') {
		return;
	}
	var o1 = g_scratchpad.o1;
	var o2 = g_scratchpad.o2;
	var o3 = g_scratchpad.o3;
	var o4 = g_scratchpad.o4;
	var o5 = g_scratchpad.o5;
	var o6 = g_scratchpad.o6;
	var o7 = g_scratchpad.o7;
	var o8 = g_scratchpad.o8;
	var o9 = g_scratchpad.o9;
	var level_2_value = g_form.getValue("u_level_2_service");

	switch(level_2_value){
		case '1':
			g_form.setValue('assignment_group', o1);
			break;
		case '2':
			g_form.setValue('assignment_group', o2);
			break;
		case '3':
			g_form.setValue('assignment_group', o3);
			break;
		case '4':
			g_form.setValue('assignment_group', o4);
			break;
		case '5':
			g_form.setValue('assignment_group', o5);
			break;
		case '6':
			g_form.setValue('assignment_group', o6);
			break;
		case '7':
			g_form.setValue('assignment_group', o7);
			break;
		case '8':
			g_form.setValue('assignment_group', o8);
			break;
		case '9':
			g_form.setValue('assignment_group', o8);
			break;
		case '10':
			g_form.setValue('assignment_group', o9);
			break;
		case '11':
			g_form.setValue('assignment_group', o8);
			break;
		case '12':
			g_form.setValue('assignment_group', o8);
			break;
		case '15':
			g_form.setValue('assignment_group', o9);
			break;

	}
}
