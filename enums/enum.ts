// Enums are used to restrict the options or to give only limited options to user to choose from.

// in the example below we use enums in case of seat allotment options.we can also define the values to the enum options by default the enum options have number as value in incremental order starting from zero, like in the example if we don't provide any value to the options by default "AISLE = 0" , "MIDDLE = 1", "WINDOW = 2" .

 const enum seatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window"
 }

 const  pcSeat = seatChoice.AISLE;


//  if we don't use const before the enum declaration it will generate an IIFE(immediately invoked function expression) when converted to javaScript, which is not ideal or is more of a complex code.

// enum seatChoice {
//     AISLE = "aisle",
//     MIDDLE = "middle",
//     WINDOW = "window"
//  }

//  const  pcSeat = seatChoice.AISLE;
