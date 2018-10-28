class Data1{
	constructor(Module_Voltage, Module_Capacitance_Temperature, Module_Board_Temperature, 
				Module_Voltage_Overvoltage_Abnormal_Bit0, Module_Voltage_Overvoltage_Abnormal_Bit1,
				Module_Voltage_Overvoltage_Abnormal_Bit2, Module_Voltage_Overvoltage_Abnormal_Bit3,
				Module_Voltage_Overvoltage_Abnormal_Bit4, Module_Voltage_Overvoltage_Abnormal_Bit5,
				Module_Voltage_Overvoltage_Abnormal_Bit6, Module_Voltage_Overvoltage_Abnormal_Bit7,
				Module_Capacity_Abnormal_Bit0, Module_Capacity_Abnormal_Bit1,
				Module_Capacity_Abnormal_Bit2, Module_Capacity_Abnormal_Bit3,
				Module_Capacity_Abnormal_Bit4, Module_Capacity_Abnormal_Bit5,
				Module_Capacity_Abnormal_Bit6, Module_Capacity_Abnormal_Bit7,
				Voltage_Equalization_Fault, Voltage_Sampling_Error, Temperature_Sampling_Error,
				Abnormal_Voltage_Data,
				Module_Voltage_Overvoltage_Warning_Bit0, Module_Voltage_Overvoltage_Warning_Bit1,
				Module_Voltage_Overvoltage_Warning_Bit2, Module_Voltage_Overvoltage_Warning_Bit3,
				Module_Voltage_Overvoltage_Warning_Bit4, Module_Voltage_Overvoltage_Warning_Bit5,
				Module_Voltage_Overvoltage_Warning_Bit6, Module_Voltage_Overvoltage_Warning_Bit7){
		//this.name = name
		this.Module_Voltage = Module_Voltage;											//int16
		this.Module_Capacitance_Temperature = Module_Capacitance_Temperature;			//int8
		this.Module_Board_Temperature = Module_Board_Temperature;						//int8
		this.Module_Voltage_Overvoltage_Abnormal_Bit0 = Module_Voltage_Overvoltage_Abnormal_Bit0;//int8
		this.Module_Voltage_Overvoltage_Abnormal_Bit1 = Module_Voltage_Overvoltage_Abnormal_Bit1;
		this.Module_Voltage_Overvoltage_Abnormal_Bit2 = Module_Voltage_Overvoltage_Abnormal_Bit2;
		this.Module_Voltage_Overvoltage_Abnormal_Bit3 = Module_Voltage_Overvoltage_Abnormal_Bit3;
		this.Module_Voltage_Overvoltage_Abnormal_Bit4 = Module_Voltage_Overvoltage_Abnormal_Bit4;
		this.Module_Voltage_Overvoltage_Abnormal_Bit5 = Module_Voltage_Overvoltage_Abnormal_Bit5;
		this.Module_Voltage_Overvoltage_Abnormal_Bit6 = Module_Voltage_Overvoltage_Abnormal_Bit6;
		this.Module_Voltage_Overvoltage_Abnormal_Bit7 = Module_Voltage_Overvoltage_Abnormal_Bit7;
		this.Module_Capacity_Abnormal_Bit0 = Module_Capacity_Abnormal_Bit0;				//int8
		this.Module_Capacity_Abnormal_Bit1 = Module_Capacity_Abnormal_Bit1;
		this.Module_Capacity_Abnormal_Bit2 = Module_Capacity_Abnormal_Bit2;
		this.Module_Capacity_Abnormal_Bit3 = Module_Capacity_Abnormal_Bit3;
		this.Module_Capacity_Abnormal_Bit4 = Module_Capacity_Abnormal_Bit4;
		this.Module_Capacity_Abnormal_Bit5 = Module_Capacity_Abnormal_Bit5;
		this.Module_Capacity_Abnormal_Bit6 = Module_Capacity_Abnormal_Bit6;
		this.Module_Capacity_Abnormal_Bit7 = Module_Capacity_Abnormal_Bit7;
		this.Voltage_Equalization_Fault = Voltage_Equalization_Fault;					//bool
		this.Voltage_Sampling_Error = Voltage_Sampling_Error;							//bool
		this.Temperature_Sampling_Error = Temperature_Sampling_Error;					//bool
		this.Abnormal_Voltage_Data = Abnormal_Voltage_Data;								//bool
		this.Module_Voltage_Overvoltage_Warning_Bit0 = Module_Voltage_Overvoltage_Warning_Bit0;//int8
		this.Module_Voltage_Overvoltage_Warning_Bit1 = Module_Voltage_Overvoltage_Warning_Bit1;
		this.Module_Voltage_Overvoltage_Warning_Bit2 = Module_Voltage_Overvoltage_Warning_Bit2;
		this.Module_Voltage_Overvoltage_Warning_Bit3 = Module_Voltage_Overvoltage_Warning_Bit3;
		this.Module_Voltage_Overvoltage_Warning_Bit4 = Module_Voltage_Overvoltage_Warning_Bit4;
		this.Module_Voltage_Overvoltage_Warning_Bit5 = Module_Voltage_Overvoltage_Warning_Bit5;
		this.Module_Voltage_Overvoltage_Warning_Bit6 = Module_Voltage_Overvoltage_Warning_Bit6;
		this.Module_Voltage_Overvoltage_Warning_Bit7 = Module_Voltage_Overvoltage_Warning_Bit7;
	}

	setting(Module_Voltage, Module_Capacitance_Temperature, Module_Board_Temperature, 
				Module_Voltage_Overvoltage_Abnormal_Bit0, Module_Voltage_Overvoltage_Abnormal_Bit1,
				Module_Voltage_Overvoltage_Abnormal_Bit2, Module_Voltage_Overvoltage_Abnormal_Bit3,
				Module_Voltage_Overvoltage_Abnormal_Bit4, Module_Voltage_Overvoltage_Abnormal_Bit5,
				Module_Voltage_Overvoltage_Abnormal_Bit6, Module_Voltage_Overvoltage_Abnormal_Bit7,
				Module_Capacity_Abnormal_Bit0, Module_Capacity_Abnormal_Bit1,
				Module_Capacity_Abnormal_Bit2, Module_Capacity_Abnormal_Bit3,
				Module_Capacity_Abnormal_Bit4, Module_Capacity_Abnormal_Bit5,
				Module_Capacity_Abnormal_Bit6, Module_Capacity_Abnormal_Bit7,
				Voltage_Equalization_Fault, Voltage_Sampling_Error, Temperature_Sampling_Error,
				Abnormal_Voltage_Data,
				Module_Voltage_Overvoltage_Warning_Bit0, Module_Voltage_Overvoltage_Warning_Bit1,
				Module_Voltage_Overvoltage_Warning_Bit2, Module_Voltage_Overvoltage_Warning_Bit3,
				Module_Voltage_Overvoltage_Warning_Bit4, Module_Voltage_Overvoltage_Warning_Bit5,
				Module_Voltage_Overvoltage_Warning_Bit6, Module_Voltage_Overvoltage_Warning_Bit7){
		console.log("...setting data1...");
		this.Module_Voltage = Module_Voltage;											//int16
		this.Module_Capacitance_Temperature = Module_Capacitance_Temperature;			//int8
		this.Module_Board_Temperature = Module_Board_Temperature;						//int8
		this.Module_Voltage_Overvoltage_Abnormal_Bit0 = Module_Voltage_Overvoltage_Abnormal_Bit0;//int8
		this.Module_Voltage_Overvoltage_Abnormal_Bit1 = Module_Voltage_Overvoltage_Abnormal_Bit1;
		this.Module_Voltage_Overvoltage_Abnormal_Bit2 = Module_Voltage_Overvoltage_Abnormal_Bit2;
		this.Module_Voltage_Overvoltage_Abnormal_Bit3 = Module_Voltage_Overvoltage_Abnormal_Bit3;
		this.Module_Voltage_Overvoltage_Abnormal_Bit4 = Module_Voltage_Overvoltage_Abnormal_Bit4;
		this.Module_Voltage_Overvoltage_Abnormal_Bit5 = Module_Voltage_Overvoltage_Abnormal_Bit5;
		this.Module_Voltage_Overvoltage_Abnormal_Bit6 = Module_Voltage_Overvoltage_Abnormal_Bit6;
		this.Module_Voltage_Overvoltage_Abnormal_Bit7 = Module_Voltage_Overvoltage_Abnormal_Bit7;
		this.Module_Capacity_Abnormal_Bit0 = Module_Capacity_Abnormal_Bit0;				//int8
		this.Module_Capacity_Abnormal_Bit1 = Module_Capacity_Abnormal_Bit1;
		this.Module_Capacity_Abnormal_Bit2 = Module_Capacity_Abnormal_Bit2;
		this.Module_Capacity_Abnormal_Bit3 = Module_Capacity_Abnormal_Bit3;
		this.Module_Capacity_Abnormal_Bit4 = Module_Capacity_Abnormal_Bit4;
		this.Module_Capacity_Abnormal_Bit5 = Module_Capacity_Abnormal_Bit5;
		this.Module_Capacity_Abnormal_Bit6 = Module_Capacity_Abnormal_Bit6;
		this.Module_Capacity_Abnormal_Bit7 = Module_Capacity_Abnormal_Bit7;
		this.Voltage_Equalization_Fault = Voltage_Equalization_Fault;					//bool
		this.Voltage_Sampling_Error = Voltage_Sampling_Error;							//bool
		this.Temperature_Sampling_Error = Temperature_Sampling_Error;					//bool
		this.Abnormal_Voltage_Data = Abnormal_Voltage_Data;								//bool
		this.Module_Voltage_Overvoltage_Warning_Bit0 = Module_Voltage_Overvoltage_Warning_Bit0;//int8
		this.Module_Voltage_Overvoltage_Warning_Bit1 = Module_Voltage_Overvoltage_Warning_Bit1;
		this.Module_Voltage_Overvoltage_Warning_Bit2 = Module_Voltage_Overvoltage_Warning_Bit2;
		this.Module_Voltage_Overvoltage_Warning_Bit3 = Module_Voltage_Overvoltage_Warning_Bit3;
		this.Module_Voltage_Overvoltage_Warning_Bit4 = Module_Voltage_Overvoltage_Warning_Bit4;
		this.Module_Voltage_Overvoltage_Warning_Bit5 = Module_Voltage_Overvoltage_Warning_Bit5;
		this.Module_Voltage_Overvoltage_Warning_Bit6 = Module_Voltage_Overvoltage_Warning_Bit6;
		this.Module_Voltage_Overvoltage_Warning_Bit7 = Module_Voltage_Overvoltage_Warning_Bit7;
	}
}

var data1 = new Data1(0,0,0,
					false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,
					false,false,false,false,
					false,false,false,false,false,false,false,false,);

class Data2{
	constructor(Module_Block_Voltage1, Module_Block_Voltage2,
				Module_Block_Voltage3, Module_Block_Voltage4){
		this.Module_Block_Voltage1 = Module_Block_Voltage1;		//int16
		this.Module_Block_Voltage2 = Module_Block_Voltage2;		//int16
		this.Module_Block_Voltage3 = Module_Block_Voltage3;		//int16
		this.Module_Block_Voltage4 = Module_Block_Voltage4;		//int16
	}

	setting(Module_Block_Voltage1, Module_Block_Voltage2,
			Module_Block_Voltage3, Module_Block_Voltage4){
		console.log("...setting data2...")
		this.Module_Block_Voltage1 = Module_Block_Voltage1;		//int16
		this.Module_Block_Voltage2 = Module_Block_Voltage2;		//int16
		this.Module_Block_Voltage3 = Module_Block_Voltage3;		//int16
		this.Module_Block_Voltage4 = Module_Block_Voltage4;
	}
}

var data2 = new Data2(0,0,0,0)

class Data3{
	constructor(Module_Block_Voltage5, Module_Block_Voltage6,
				Module_Block_Voltage7, Module_Block_Voltage8){
		this.Module_Block_Voltage5 = Module_Block_Voltage5;
		this.Module_Block_Voltage6 = Module_Block_Voltage6;
		this.Module_Block_Voltage7 = Module_Block_Voltage7;
		this.Module_Block_Voltage8 = Module_Block_Voltage8;
	}

	setting(Module_Block_Voltage5, Module_Block_Voltage6,
			Module_Block_Voltage7, Module_Block_Voltage8){
		console.log("...setting data3...")
		this.Module_Block_Voltage5 = Module_Block_Voltage5;
		this.Module_Block_Voltage6 = Module_Block_Voltage6;
		this.Module_Block_Voltage7 = Module_Block_Voltage7;
		this.Module_Block_Voltage8 = Module_Block_Voltage8;
	}
}

var data3 = new Data3(0,0,0,0)

class Data4{
	constructor(Module_Voltage_Undervoltage_Warning_Bit0, Module_Voltage_Undervoltage_Warning_Bit1,
				Module_Voltage_Undervoltage_Warning_Bit2, Module_Voltage_Undervoltage_Warning_Bit3,
				Module_Voltage_Undervoltage_Warning_Bit4, Module_Voltage_Undervoltage_Warning_Bit5,
				Module_Voltage_Undervoltage_Warning_Bit6, Module_Voltage_Undervoltage_Warning_Bit7,
				Module_Internal_Resistance_Abnormality_Bit0, Module_Internal_Resistance_Abnormality_Bit1,
				Module_Internal_Resistance_Abnormality_Bit2, Module_Internal_Resistance_Abnormality_Bit3,
				Module_Internal_Resistance_Abnormality_Bit4, Module_Internal_Resistance_Abnormality_Bit5,
				Module_Internal_Resistance_Abnormality_Bit6, Module_Internal_Resistance_Abnormality_Bit7,
				Forced_On_Signal, Module_Equalization_Switch,
				Module_Voltage_Equalization_State_Bit0, Module_Voltage_Equalization_State_Bit1,
				Module_Voltage_Equalization_State_Bit2, Module_Voltage_Equalization_State_Bit3,
				Module_Voltage_Equalization_State_Bit4, Module_Voltage_Equalization_State_Bit5,
				Module_Voltage_Equalization_State_Bit6, Module_Voltage_Equalization_State_Bit7,
				Module_Voltage_Undervoltage_Alarm_Bit0, Module_Voltage_Undervoltage_Alarm_Bit1,
				Module_Voltage_Undervoltage_Alarm_Bit2, Module_Voltage_Undervoltage_Alarm_Bit3,
				Module_Voltage_Undervoltage_Alarm_Bit4, Module_Voltage_Undervoltage_Alarm_Bit5,
				Module_Voltage_Undervoltage_Alarm_Bit6, Module_Voltage_Undervoltage_Alarm_Bit7,
				Module_Voltage_Low_voltage_Alarm_Bit0, Module_Voltage_Low_voltage_Alarm_Bit1,
				Module_Voltage_Low_voltage_Alarm_Bit2, Module_Voltage_Low_voltage_Alarm_Bit3,
				Module_Voltage_Low_voltage_Alarm_Bit4, Module_Voltage_Low_voltage_Alarm_Bit5,
				Module_Voltage_Low_voltage_Alarm_Bit6, Module_Voltage_Low_voltage_Alarm_Bit7,
				Software_version_Number, Software_Minor_version_Number){
		this.Module_Voltage_Undervoltage_Warning_Bit0 = Module_Voltage_Undervoltage_Warning_Bit0;
		this.Module_Voltage_Undervoltage_Warning_Bit1 = Module_Voltage_Undervoltage_Warning_Bit1;
		this.Module_Voltage_Undervoltage_Warning_Bit2 = Module_Voltage_Undervoltage_Warning_Bit2;
		this.Module_Voltage_Undervoltage_Warning_Bit3 = Module_Voltage_Undervoltage_Warning_Bit3;
		this.Module_Voltage_Undervoltage_Warning_Bit4 = Module_Voltage_Undervoltage_Warning_Bit4;
		this.Module_Voltage_Undervoltage_Warning_Bit5 = Module_Voltage_Undervoltage_Warning_Bit5;
		this.Module_Voltage_Undervoltage_Warning_Bit6 = Module_Voltage_Undervoltage_Warning_Bit6;
		this.Module_Voltage_Undervoltage_Warning_Bit7 = Module_Voltage_Undervoltage_Warning_Bit7;
		this.Module_Internal_Resistance_Abnormality_Bit0 = Module_Internal_Resistance_Abnormality_Bit0;
		this.Module_Internal_Resistance_Abnormality_Bit1 = Module_Internal_Resistance_Abnormality_Bit1;
		this.Module_Internal_Resistance_Abnormality_Bit2 = Module_Internal_Resistance_Abnormality_Bit2;
		this.Module_Internal_Resistance_Abnormality_Bit3 = Module_Internal_Resistance_Abnormality_Bit3;
		this.Module_Internal_Resistance_Abnormality_Bit4 = Module_Internal_Resistance_Abnormality_Bit4;
		this.Module_Internal_Resistance_Abnormality_Bit5 = Module_Internal_Resistance_Abnormality_Bit5;
		this.Module_Internal_Resistance_Abnormality_Bit6 = Module_Internal_Resistance_Abnormality_Bit6;
		this.Module_Internal_Resistance_Abnormality_Bit7 = Module_Internal_Resistance_Abnormality_Bit7;
		this.Forced_On_Signal = Forced_On_Signal;
		this.Module_Equalization_Switch = Module_Equalization_Switch;
		this.Module_Voltage_Equalization_State_Bit0 = Module_Voltage_Equalization_State_Bit0;
		this.Module_Voltage_Equalization_State_Bit1 = Module_Voltage_Equalization_State_Bit1;
		this.Module_Voltage_Equalization_State_Bit2 = Module_Voltage_Equalization_State_Bit2;
		this.Module_Voltage_Equalization_State_Bit3 = Module_Voltage_Equalization_State_Bit3;
		this.Module_Voltage_Equalization_State_Bit4 = Module_Voltage_Equalization_State_Bit4;
		this.Module_Voltage_Equalization_State_Bit5 = Module_Voltage_Equalization_State_Bit5;
		this.Module_Voltage_Equalization_State_Bit6 = Module_Voltage_Equalization_State_Bit6;
		this.Module_Voltage_Equalization_State_Bit7 = Module_Voltage_Equalization_State_Bit7;
		this.Module_Voltage_Undervoltage_Alarm_Bit0 = Module_Voltage_Undervoltage_Alarm_Bit0;
		this.Module_Voltage_Undervoltage_Alarm_Bit1 = Module_Voltage_Undervoltage_Alarm_Bit1;
		this.Module_Voltage_Undervoltage_Alarm_Bit2 = Module_Voltage_Undervoltage_Alarm_Bit2;
		this.Module_Voltage_Undervoltage_Alarm_Bit3 = Module_Voltage_Undervoltage_Alarm_Bit3;
		this.Module_Voltage_Undervoltage_Alarm_Bit4 = Module_Voltage_Undervoltage_Alarm_Bit4;
		this.Module_Voltage_Undervoltage_Alarm_Bit5 = Module_Voltage_Undervoltage_Alarm_Bit5;
		this.Module_Voltage_Undervoltage_Alarm_Bit6 = Module_Voltage_Undervoltage_Alarm_Bit6;
		this.Module_Voltage_Undervoltage_Alarm_Bit7 = Module_Voltage_Undervoltage_Alarm_Bit7;
		this.Module_Voltage_Low_voltage_Alarm_Bit0 = Module_Voltage_Low_voltage_Alarm_Bit0;
		this.Module_Voltage_Low_voltage_Alarm_Bit1 = Module_Voltage_Low_voltage_Alarm_Bit1;
		this.Module_Voltage_Low_voltage_Alarm_Bit2 = Module_Voltage_Low_voltage_Alarm_Bit2;
		this.Module_Voltage_Low_voltage_Alarm_Bit3 = Module_Voltage_Low_voltage_Alarm_Bit3;
		this.Module_Voltage_Low_voltage_Alarm_Bit4 = Module_Voltage_Low_voltage_Alarm_Bit4;
		this.Module_Voltage_Low_voltage_Alarm_Bit5 = Module_Voltage_Low_voltage_Alarm_Bit5;
		this.Module_Voltage_Low_voltage_Alarm_Bit6 = Module_Voltage_Low_voltage_Alarm_Bit6;
		this.Module_Voltage_Low_voltage_Alarm_Bit7 = Module_Voltage_Low_voltage_Alarm_Bit7;
		this.Software_version_Number = Software_version_Number;
		this.Software_Minor_version_Number = Software_Minor_version_Number;
	}

	setting(Module_Voltage_Undervoltage_Warning_Bit0, Module_Voltage_Undervoltage_Warning_Bit1,
				Module_Voltage_Undervoltage_Warning_Bit2, Module_Voltage_Undervoltage_Warning_Bit3,
				Module_Voltage_Undervoltage_Warning_Bit4, Module_Voltage_Undervoltage_Warning_Bit5,
				Module_Voltage_Undervoltage_Warning_Bit6, Module_Voltage_Undervoltage_Warning_Bit7,
				Module_Internal_Resistance_Abnormality_Bit0, Module_Internal_Resistance_Abnormality_Bit1,
				Module_Internal_Resistance_Abnormality_Bit2, Module_Internal_Resistance_Abnormality_Bit3,
				Module_Internal_Resistance_Abnormality_Bit4, Module_Internal_Resistance_Abnormality_Bit5,
				Module_Internal_Resistance_Abnormality_Bit6, Module_Internal_Resistance_Abnormality_Bit7,
				Forced_On_Signal, Module_Equalization_Switch,
				Module_Voltage_Equalization_State_Bit0, Module_Voltage_Equalization_State_Bit1,
				Module_Voltage_Equalization_State_Bit2, Module_Voltage_Equalization_State_Bit3,
				Module_Voltage_Equalization_State_Bit4, Module_Voltage_Equalization_State_Bit5,
				Module_Voltage_Equalization_State_Bit6, Module_Voltage_Equalization_State_Bit7,
				Module_Voltage_Undervoltage_Alarm_Bit0, Module_Voltage_Undervoltage_Alarm_Bit1,
				Module_Voltage_Undervoltage_Alarm_Bit2, Module_Voltage_Undervoltage_Alarm_Bit3,
				Module_Voltage_Undervoltage_Alarm_Bit4, Module_Voltage_Undervoltage_Alarm_Bit5,
				Module_Voltage_Undervoltage_Alarm_Bit6, Module_Voltage_Undervoltage_Alarm_Bit7,
				Module_Voltage_Low_voltage_Alarm_Bit0, Module_Voltage_Low_voltage_Alarm_Bit1,
				Module_Voltage_Low_voltage_Alarm_Bit2, Module_Voltage_Low_voltage_Alarm_Bit3,
				Module_Voltage_Low_voltage_Alarm_Bit4, Module_Voltage_Low_voltage_Alarm_Bit5,
				Module_Voltage_Low_voltage_Alarm_Bit6, Module_Voltage_Low_voltage_Alarm_Bit7,
				Software_version_Number, Software_Minor_version_Number){
		console.log("...setting data4...")
		this.Module_Voltage_Undervoltage_Warning_Bit0 = Module_Voltage_Undervoltage_Warning_Bit0;
		this.Module_Voltage_Undervoltage_Warning_Bit1 = Module_Voltage_Undervoltage_Warning_Bit1;
		this.Module_Voltage_Undervoltage_Warning_Bit2 = Module_Voltage_Undervoltage_Warning_Bit2;
		this.Module_Voltage_Undervoltage_Warning_Bit3 = Module_Voltage_Undervoltage_Warning_Bit3;
		this.Module_Voltage_Undervoltage_Warning_Bit4 = Module_Voltage_Undervoltage_Warning_Bit4;
		this.Module_Voltage_Undervoltage_Warning_Bit5 = Module_Voltage_Undervoltage_Warning_Bit5;
		this.Module_Voltage_Undervoltage_Warning_Bit6 = Module_Voltage_Undervoltage_Warning_Bit6;
		this.Module_Voltage_Undervoltage_Warning_Bit7 = Module_Voltage_Undervoltage_Warning_Bit7;
		this.Module_Internal_Resistance_Abnormality_Bit0 = Module_Internal_Resistance_Abnormality_Bit0;
		this.Module_Internal_Resistance_Abnormality_Bit1 = Module_Internal_Resistance_Abnormality_Bit1;
		this.Module_Internal_Resistance_Abnormality_Bit2 = Module_Internal_Resistance_Abnormality_Bit2;
		this.Module_Internal_Resistance_Abnormality_Bit3 = Module_Internal_Resistance_Abnormality_Bit3;
		this.Module_Internal_Resistance_Abnormality_Bit4 = Module_Internal_Resistance_Abnormality_Bit4;
		this.Module_Internal_Resistance_Abnormality_Bit5 = Module_Internal_Resistance_Abnormality_Bit5;
		this.Module_Internal_Resistance_Abnormality_Bit6 = Module_Internal_Resistance_Abnormality_Bit6;
		this.Module_Internal_Resistance_Abnormality_Bit7 = Module_Internal_Resistance_Abnormality_Bit7;
		this.Forced_On_Signal = Forced_On_Signal;
		this.Module_Equalization_Switch = Module_Equalization_Switch;
		this.Module_Voltage_Equalization_State_Bit0 = Module_Voltage_Equalization_State_Bit0;
		this.Module_Voltage_Equalization_State_Bit1 = Module_Voltage_Equalization_State_Bit1;
		this.Module_Voltage_Equalization_State_Bit2 = Module_Voltage_Equalization_State_Bit2;
		this.Module_Voltage_Equalization_State_Bit3 = Module_Voltage_Equalization_State_Bit3;
		this.Module_Voltage_Equalization_State_Bit4 = Module_Voltage_Equalization_State_Bit4;
		this.Module_Voltage_Equalization_State_Bit5 = Module_Voltage_Equalization_State_Bit5;
		this.Module_Voltage_Equalization_State_Bit6 = Module_Voltage_Equalization_State_Bit6;
		this.Module_Voltage_Equalization_State_Bit7 = Module_Voltage_Equalization_State_Bit7;
		this.Module_Voltage_Undervoltage_Alarm_Bit0 = Module_Voltage_Undervoltage_Alarm_Bit0;
		this.Module_Voltage_Undervoltage_Alarm_Bit1 = Module_Voltage_Undervoltage_Alarm_Bit1;
		this.Module_Voltage_Undervoltage_Alarm_Bit2 = Module_Voltage_Undervoltage_Alarm_Bit2;
		this.Module_Voltage_Undervoltage_Alarm_Bit3 = Module_Voltage_Undervoltage_Alarm_Bit3;
		this.Module_Voltage_Undervoltage_Alarm_Bit4 = Module_Voltage_Undervoltage_Alarm_Bit4;
		this.Module_Voltage_Undervoltage_Alarm_Bit5 = Module_Voltage_Undervoltage_Alarm_Bit5;
		this.Module_Voltage_Undervoltage_Alarm_Bit6 = Module_Voltage_Undervoltage_Alarm_Bit6;
		this.Module_Voltage_Undervoltage_Alarm_Bit7 = Module_Voltage_Undervoltage_Alarm_Bit7;
		this.Module_Voltage_Low_voltage_Alarm_Bit0 = Module_Voltage_Low_voltage_Alarm_Bit0;
		this.Module_Voltage_Low_voltage_Alarm_Bit1 = Module_Voltage_Low_voltage_Alarm_Bit1;
		this.Module_Voltage_Low_voltage_Alarm_Bit2 = Module_Voltage_Low_voltage_Alarm_Bit2;
		this.Module_Voltage_Low_voltage_Alarm_Bit3 = Module_Voltage_Low_voltage_Alarm_Bit3;
		this.Module_Voltage_Low_voltage_Alarm_Bit4 = Module_Voltage_Low_voltage_Alarm_Bit4;
		this.Module_Voltage_Low_voltage_Alarm_Bit5 = Module_Voltage_Low_voltage_Alarm_Bit5;
		this.Module_Voltage_Low_voltage_Alarm_Bit6 = Module_Voltage_Low_voltage_Alarm_Bit6;
		this.Module_Voltage_Low_voltage_Alarm_Bit7 = Module_Voltage_Low_voltage_Alarm_Bit7;
		this.Software_version_Number = Software_version_Number;
		this.Software_Minor_version_Number = Software_Minor_version_Number;
	}
}

var data4 = new Data4(false,false,false,false,false,false,false,false,
					  false,false,false,false,false,false,false,false,
					  false,false,
					  false,false,false,false,false,false,false,false,
					  false,false,false,false,false,false,false,false,
					  false,false,false,false,false,false,false,false,
					  0,0)

class Data5{
	constructor(Balanced_data_number, Modules_Above_Threshold_Voltage, Moduel_Average_Voltage, 
		Module_Voltage_Threshold, Minimum_Module_Voltage){
		this.Balanced_data_number = Balanced_data_number;
		this.Modules_Above_Threshold_Voltage = Modules_Above_Threshold_Voltage;
		this.Moduel_Average_Voltage = Moduel_Average_Voltage;
		this.Module_Voltage_Threshold = Module_Voltage_Threshold;
		this.Minimum_Module_Voltage = Minimum_Module_Voltage;
	}

	setting(Balanced_data_number, Modules_Above_Threshold_Voltage, Moduel_Average_Voltage, 
		Module_Voltage_Threshold, Minimum_Module_Voltage){
		console.log("...setting data5...")
		this.Balanced_data_number = Balanced_data_number;
		this.Modules_Above_Threshold_Voltage = Modules_Above_Threshold_Voltage;
		this.Moduel_Average_Voltage = Moduel_Average_Voltage;
		this.Module_Voltage_Threshold = Module_Voltage_Threshold;
		this.Minimum_Module_Voltage = Minimum_Module_Voltage;
	}
}

var data5 = new Data5(0,0,0,0,0)


class Data6{
	constructor(Energy_storage_voltage, Energy_storage_current, Energy_storage_power_state, 
				Energy_Storage_Power_State, Positive_Fuse_Failure, Negative_Fuse_Failure, 
				Isolated_Power_Failure, Surge_Protector_Failure, Complete_Equivalent_Charge_Sign,
				Fan_failure1, Fan_failure2, Fan_failure3, Fan_failure4, Fan_failure5, Fan_failure11,
				Fan_failure6, Fan_failure7, Fan_failure8, Fan_failure9, Fan_failure10, Fan_failure12,
				Fan_Open_Sign1, Fan_Open_Sign2, Fan_Open_Sign3
				){
		this.Energy_storage_voltage = Energy_storage_voltage;					//int16
		this.Energy_storage_current = Energy_storage_current;					//int16
		this.Energy_storage_power_state = Energy_storage_power_state;			//int8
		this.Energy_Storage_Power_State = Energy_Storage_Power_State;
		this.Positive_Fuse_Failure = Positive_Fuse_Failure;
		this.Negative_Fuse_Failure = Negative_Fuse_Failure;
		this.Isolated_Power_Failure = Isolated_Power_Failure;
		this.Surge_Protector_Failure = Surge_Protector_Failure;
		this.Complete_Equivalent_Charge_Sign = Complete_Equivalent_Charge_Sign;
		this.Fan_failure1 = Fan_failure1;										//int8
		this.Fan_failure2 = Fan_failure2;
		this.Fan_failure3 = Fan_failure3;
		this.Fan_failure4 = Fan_failure4;
		this.Fan_failure5 = Fan_failure5;
		this.Fan_failure6 = Fan_failure6;
		this.Fan_failure7 = Fan_failure7;
		this.Fan_failure8 = Fan_failure8;
		this.Fan_failure9 = Fan_failure9;
		this.Fan_failure10 = Fan_failure10;
		this.Fan_failure11 = Fan_failure11;
		this.Fan_failure12 = Fan_failure12;										//int8
		this.Fan_Open_Sign1 = Fan_Open_Sign1;
		this.Fan_Open_Sign2 = Fan_Open_Sign2;
		this.Fan_Open_Sign3 = Fan_Open_Sign3;
	}

	setting(Energy_storage_voltage, Energy_storage_current, Energy_storage_power_state, 
				Energy_Storage_Power_State, Positive_Fuse_Failure, Negative_Fuse_Failure, 
				Isolated_Power_Failure, Surge_Protector_Failure, Complete_Equivalent_Charge_Sign,
				Fan_failure1, Fan_failure2, Fan_failure3, Fan_failure4, Fan_failure5, Fan_failure11,
				Fan_failure6, Fan_failure7, Fan_failure8, Fan_failure9, Fan_failure10, Fan_failure12,
				Fan_Open_Sign1, Fan_Open_Sign2, Fan_Open_Sign3){
		console.log("...setting data6...");
		this.Energy_storage_voltage = Energy_storage_voltage;					//int16
		this.Energy_storage_current = Energy_storage_current;					//int16
		this.Energy_storage_power_state = Energy_storage_power_state;			//int8
		this.Energy_Storage_Power_State = Energy_Storage_Power_State;
		this.Positive_Fuse_Failure = Positive_Fuse_Failure;
		this.Negative_Fuse_Failure = Negative_Fuse_Failure;
		this.Isolated_Power_Failure = Isolated_Power_Failure;
		this.Surge_Protector_Failure = Surge_Protector_Failure;
		this.Complete_Equivalent_Charge_Sign = Complete_Equivalent_Charge_Sign;
		this.Fan_failure1 = Fan_failure1;										//int8
		this.Fan_failure2 = Fan_failure2;
		this.Fan_failure3 = Fan_failure3;
		this.Fan_failure4 = Fan_failure4;
		this.Fan_failure5 = Fan_failure5;
		this.Fan_failure6 = Fan_failure6;
		this.Fan_failure7 = Fan_failure7;
		this.Fan_failure8 = Fan_failure8;
		this.Fan_failure9 = Fan_failure9;
		this.Fan_failure10 = Fan_failure10;
		this.Fan_failure11 = Fan_failure11;
		this.Fan_failure12 = Fan_failure12;										//int8
		this.Fan_Open_Sign1 = Fan_Open_Sign1;
		this.Fan_Open_Sign2 = Fan_Open_Sign2;
		this.Fan_Open_Sign3 = Fan_Open_Sign3;
	}
}

var data6 = new Data6(0,0,0,
					false,false,false,false,false,false,
					false,false,false,false,false,false,
					false,false,false,false,false,false,
					false,false,false);