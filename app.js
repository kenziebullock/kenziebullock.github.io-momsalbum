$( document ).ready(() => {

  // Get the modal
  const modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  const first = document.getElementById('xmas');
  const second = document.getElementById('belize');
  const third = document.getElementById('cruise');
  const fourth = document.getElementById('joyce');
  const fifth = document.getElementById('mexico');
  const sixth = document.getElementById('nyc');
  const seventh = document.getElementById('hawaii');
  const eigth = document.getElementById('random');
  const ninth = document.getElementById('sandiego');
  const tenth = document.getElementById('sarah');
  const eleventh = document.getElementById('sauble');
  const twelvth = document.getElementById('turks');

  const modalImg = document.getElementById("img01");
  
  function slideshow(arr, folder) {
    let counter = 0;
    let src = arr[0];
    
    function next() {
      if (counter === arr.length -1) counter = 0;
      counter++;
      src = `assets/pics/${folder}/${arr[counter]}`
      modalImg.src = src;
    }

    next()
    setInterval(next, 3000)

    modal.style.display = "block";
  }

  first.onclick = () => {
    slideshow(xmas, 'Xmas')
  }

  second.onclick = () => {
    slideshow(belize, 'Belize10')
  }

  third.onclick = () => {
    slideshow(cruise, 'Cruise10')
  }

  fourth.onclick = () => {
    slideshow(joyce, 'Joyces09')
  }

  fifth.onclick = () => {
    slideshow(mexico, 'Mexico08')
  }

  sixth.onclick = () => {
    slideshow(nyc, 'NYC11')
  }

  seventh.onclick = () => {
    slideshow(hawaii, 'OnionHouse')
  }

  eigth.onclick = () => {
    slideshow(random, 'Random')
  }

  ninth.onclick = () => {
    slideshow(sandiego, 'SanDiego10')
  }

  tenth.onclick = () => {
    slideshow(sarah, "Sarah's Bday 09")
  }

  eleventh.onclick = () => {
    slideshow(sauble, 'Sauble08')
  }

  twelvth.onclick = () => {
    slideshow(turks, 'Turks12')
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }

  const belize = [
    'Belize_2010-2354.JPG',
    'Belize_2010-2358.JPG',
    'Belize_2010-2375.JPG',
    'Belize_2010-2389.JPG',
    'Belize_2010-2426.JPG',
    'Belize_2010-2431.JPG',
    'Belize_2010-2583.JPG',
    'Belize_2010-2722.JPG'
  ]

  const cruise = [
    "Cruise_Feb10-0246.JPG",
    'Cruise_Feb10-0248.JPG',
    'Cruise_Feb10-0263.JPG',
    'Cruise_Feb10-0293.JPG',
    'Cruise_Feb10-0388.JPG',
    'Cruise_Feb10-0431.JPG',
    'Cruise_Feb10-0475.JPG',
    'Cruise_Feb10-0503.JPG',
    'Cruise_Feb10-0524.JPG',
    'Cruise_Feb10-0996.JPG',
    'Cruise10-1761.JPG',
    'DolfinSwim-1-1.JPG',
    'DolfinSwim-12.JPG',
    'DolfinSwim.JPG'
  ]

  const joyce = [
    '9MA_6605.JPG',
    '9MA_6609.JPG',
    '9MA_6610.JPG',
    '9MA_6652.JPG',
    '9MA_6667.JPG',
    '9MA_6710.JPG',
    '9MA_6718.JPG',
    '9MA_6746.JPG',
    '9MA_6761.JPG',
    '9MA_6785.JPG',
    '9MA_6820.JPG',
    '9MA_6822.JPG',
    '9MA_6849.JPG' 
  ]

  const mexico = [
    '8DE_4906.JPG',
    '8DE_4910.JPG',
    '8DE_4919.JPG',
    '8DE_4927.JPG',
    '8DE_4933.JPG',
    '8DE_4942.JPG',
    '8DE_4952.JPG',
    '8DE_4955.JPG',
    '8DE_4958.JPG',
    '8DE_4966.JPG',
    '8DE_4968.JPG',
    '8DE_4970.JPG',
    '8DE_4981.JPG',
    '8DE_5037.JPG',
    '8DE_5044.JPG',
    '8DE_5054.JPG',
    '8DE_5080.JPG',
    '8DE_5097.JPG',
    '8DE_5112.JPG',
    '8DE_5119.JPG',
    '8DE_5132.JPG',
    '8DE_5139.JPG',
    '8DE_5149.JPG',
    '8DE_5166.JPG',
    '8DE_5169.JPG',
    '8DE_5170.JPG',
    '8DE_5176.JPG',
    '8DE_5180.JPG',
    '8DE_5191.JPG',
    '8DE_5193.JPG',
    '8DE_5202.JPG',
    '8DE_5238.JPG',
    '8DE_5268.JPG',
    '8DE_5384.JPG',
    '8DE_5390.JPG',
    '8DE_5394.JPG',
    '8DE_5413.JPG',
    '8DE_5415.JPG',
    '8DE_5425.JPG',
    '8DE_5430.JPG',
    '8DE_5437.JPG',
    '8DE_5440.JPG',
    '8DE_5445.JPG',
    '8DE_5466.JPG',
    '8DE_5486.JPG',
    '8DE_5516.JPG',
    '8DE_5538.JPG',
    '8DE_5543.JPG',
    '8DE_5570.JPG',
    '8DE_5611.JPG',
    '8DE_5653.JPG',
    '8DE_5669.JPG',
    '8DE_5673.JPG',
    '20071231-DSC_0044.JPG',
    '20071231-DSC_0053.JPG',
    '20071231-DSC_0131.JPG',
    '20071231-DSC_0134.JPG',
    '20071231-DSC_0139.JPG',
    '20071231-DSC_0177.JPG',
    '20071231-P1010004.JPG',
    '20080101-DSC_0193.JPG',
    '20080101-DSC_0256.JPG',
    '20080101-DSC_0272.JPG',
    '20080103-P1010071.JPG',
    '20080104-DSC_0433.JPG',
    '20080104-DSC_0445.JPG',
    '20080104-P1010094.JPG',
    '20080105-DSC_0489.JPG'
  ]

  const xmas = [
    'SD 2010-4863.JPG',
    // '1',
    // '2',
    // '3',
    // '4',
    '20051223-fall05 and school 304.jpg',
    '20051223-fall05 and school 306.jpg',
    '20051224-fall05 and school 312.jpg',
    '20051224-fall05 and school 313.jpg',
    // '20051224-fall05 and school 318-1 (dragged).tiff',
    '20051224-fall05 and school 322.jpg',
    '20051227-fall05 and school 326.jpg',
    '20051227-fall05 and school 331.jpg',
    '20071225-DSC_0003.JPG',
    '20071225-DSC_0118.JPG',
    '20071225-DSC_0119.JPG',
    '20081225-8JU_4896.jpg',
    '20111225-KON_9714.JPG',
    // '20111225-KON_9726-1 (dragged).tiff',
    '20111225-KON_9747.JPG',
    '20111225-KON_9753.JPG',
    '20970219-hg1 (50).JPG',
    '20970312-hg1 (75).JPG',
    '20970512-hg1 (178).JPG',
    '20970512-hg1 (183).JPG',
    '20970512-hg1 (198).JPG',
    // 'SD 2010-4816-1 (dragged).tiff',
    'SD 2010-4821.JPG',
    // 'SD 2010-4830-1 (dragged).tiff',
    'SD 2010-4837.JPG',
    'SD 2010-4845.JPG',
    'SD 2010-4851.JPG',
    'SD 2010-4855.JPG'
  ]

  const nyc = [
    // '20110902-KON_8746-1 (dragged).tiff',
    '20110902-KON_8697.JPG',
    '20110902-KON_8708.JPG',
    '20110902-KON_8751.JPG',
    '20110902-KON_8811.JPG',
    '20110902-KON_8857.JPG',
    '20110903-KON_8987.JPG',
    '20110903-KON_8996.JPG',
    '20110903-KON_9088.JPG'
  ]

  const hawaii = [
    '20101227-KON_4905.JPG',
    // '20101227-KON_4918-1 (dragged).tiff'
    '20101227-KON_4923.JPG',
    '20101227-KON_4939.JPG',
    // '20101227-KON_4945-1 (dragged).tiff'
    '20101227-KON_4973.JPG',
    '20101227-KON_5007.JPG',
    '20101228-KON_5012.JPG',
    '20101228-KON_5015.JPG',
    '20101228-KON_5030.JPG',
    '20101228-KON_5033.JPG',
    '20101228-KON_5082.JPG',
    '20101228-KON_5196.JPG',
    '20101229-KON_5203.JPG',
    '20101229-KON_5260.JPG',
    // '20110101-KON_5280-1 (dragged).tiff'
    // '20110104-KON_5838-1 (dragged).tiff'
    '20110104-KON_5904.JPG'
  ]

  const sandiego = [
    '9DE_0006.JPG',
    '9DE_0016.JPG',
    '9DE_0044.JPG',
    '9DE_0056.JPG',
    '9DE_0122.JPG',
    '9DE_0127.JPG',
    '9DE_0158.JPG',
    '9DE_0176.JPG',
    '9DE_0192.JPG',
    '9DE_9909.JPG',
    '9DE_9941.JPG',
    '9DE_9950.JPG',
    '9DE_9965.JPG',
    '9DE_9980.JPG',
    'SanDiego-2256.JPG',
    'SanDiego-2287.JPG'
  ]

  const sarah = [
    '20091017-9MA_8653.jpg',
    '20091017-9MA_8658.jpg',
    '20091017-9MA_8675.jpg',
    '20091017-9MA_8680.jpg',
    '20091017-9MA_8681.jpg',
    '20091017-9MA_8700.jpg',
    '20091017-9MA_8707.jpg',
    '20091017-9MA_8749.jpg'
  ]

  const sauble = [
    '20080731-8JU_3296.JPG',
    '20080731-8JU_3302.JPG',
    '20080731-8JU_3304.JPG',
    '20080731-8JU_3315.JPG',
    '20080731-8JU_3324.JPG',
    '20080801-8JU_3339.JPG',
    '20080801-8JU_3343.JPG',
    '20080801-8JU_3350.JPG',
    '20080802-8JU_3357.JPG'
  ]

  const turks = [
    'T&Caicos _2012-3061.JPG',
    'T&Caicos _2012-3152.JPG',
    'T&Caicos _2012-3159.JPG',
    'T&Caicos _2012-3190.JPG',
    'T&Caicos _2012-3204.JPG',
    'T&Caicos _2012-3318.JPG',
    'T&Caicos _2012-3341.JPG',
    'T&Caicos _2012-3371.JPG',
    'T&Caicos _2012-3374.JPG',
    'T&Caicos _2012-3647.JPG',
    'T&Caicos _2012-3651.JPG',
    'T&Caicos _2012-3677.JPG',
    'T&Caicos _2012-3937.JPG',
    'T&Caicos _2012-3989.JPG'
  ]

  const random = [
    '9MA_6962.JPG',
    '9MA_6966.JPG',
    '9MA_6985.JPG',
    '9MA_7025.JPG',
    '9MA_7051.JPG',
    '9MA_8445.JPG',
    '9MA_8447.JPG',
    '9MA_8497.JPG',
    '9MA_8499.JPG',
    '9MA_8582.JPG',
    '9MA_8594.JPG',
    '9MA_8598.JPG',
    '9MA_8626.JPG',
    '9MA_8638.JPG',
    '9MA_8643.JPG',
    '9NO_9025.JPG',
    '9NO_9036.JPG',
    '9NO_9050.JPG',
    '9NO_9142.JPG',
    '9NO_9153.JPG',
    '20030614-P6140151.JPG',
    '20030801-P8010021.JPG',
    '20030906-P9060096.JPG',
    '20031226-KWbeach03.JPG',
    '20031230-PC300025.JPG',
    '20040604-P6040007.JPG',
    '20040625-P6250043.JPG',
    '20040625-P6250049.JPG',
    '20040625-P6250069.JPG',
    '20040804-P8040075.JPG',
    '20040806-P8060101.JPG',
    '20040811-IMG_1271.JPG',
    '20040811-IMG_1272.JPG',
    '20040903-P9030005.JPG',
    '20050304-P3040159.JPG',
    '20050304-P3040161.JPG',
    '20050402-P4020210.JPG',
    '20050429-P4290225.JPG',
    '20050429-P4290263.JPG',
    '20050527-P5270267.JPG',
    '20050529-P5290279.JPG',
    '20050529-P5290283.JPG',
    '20050821-fall05 and school 117.jpg',
    '20050824-fall05 and school 001.jpg',
    // 20050831-fall05 and school 004-1 (dragged).tiff
    '20050904-fall05 and school 014.jpg',
    '20050924-fall05 and school 020.jpg',
    '20050925-fall05 and school 032.jpg',
    '20051028-fall05 and school 038.jpg',
    '20051028-fall05 and school 054.jpg',
    '20051028-fall05 and school 059.jpg',
    '20051028-fall05 and school 064.jpg',
    '20051028-fall05 and school 066.jpg',
    '20051105-fall05 and school 070.jpg',
    '20051126-fall05 and school 131.jpg',
    '20051208-fall05 and school 250.jpg',
    '20060603-fall05 and school 366.jpg',
    '20060708-fall05 and school 385.jpg',
    '20070505-DSC_0053.JPG',
    '20070505-DSC_0068.JPG',
    '20070505-DSC_0076.JPG',
    '20070520-DSC_0088.JPG',
    '20080323-DSC_0238.JPG',
    '20080323-DSC_0244.JPG',
    '20080323-DSC_0262.JPG',
    '20080323-DSC_0331.JPG',
    '20080808-8JU_3367.JPG',
    '20080901-8JU_3570.jpg',
    '20100612-9DE_3380.JPG',
    '20100612-9DE_3415.JPG',
    '20100703-9DE_3432.JPG',
    '20100703-9DE_3444.JPG',
    '20100703-9DE_3445.JPG',
    '20100707-9DE_3519.JPG',
    '20100707-9DE_3521.JPG',
    '20100707-9DE_3532.JPG',
    '20100707-9DE_3592.JPG',
    '20100707-9DE_3613.JPG',
    '20100707-9DE_3623.JPG',
    '20100717-9DE_3693.JPG',
    '20100717-9DE_3723.JPG',
    '20100717-9DE_3757.JPG',
    '20100906-9DE_4041.JPG',
    '20100906-9DE_4069.JPG',
    '20100906-9DE_4076.JPG',
    '20100919-9DE_4095.JPG',
    '20100919-9DE_4104.JPG',
    '20101009-9DE_4138.JPG',
    '20101009-9DE_4140.JPG',
    '20101009-9DE_4144.JPG',
    // 20101009-9DE_4150-1 (dragged).tiff
    '20101009-9DE_4152.JPG',
    '20101009-9DE_4160.JPG',
    '20101010-9DE_4177.JPG',
    // 20101010-9DE_4181-1 (dragged).tiff
    '20101031-9DE_4202.JPG',
    '20101031-9DE_4236.JPG',
    '20101105-9DE_4257.JPG',
    '20101107-9DE_4303.JPG',
    '20101107-9DE_4342.JPG',
    '20110716-KON_7664.JPG',
    '20110716-KON_7720.JPG',
    "20110806-KON_8451.JPG",
    '20970603-hg1 (263).JPG',
    '20970807-hg1 (102).JPG',
    '20970810-hg1 (137).JPG',
    '20971225-DSC_0003.JPG',
    '20980408-hg1 (175).JPG',
    '20980421-hg1 (192).JPG',
    'Ashley Wedding-2245.JPG',
    // Ashley Wedding-2246-1 (dragged).tiff
    'Ashley Wedding-2260.JPG',
    'Ashley Wedding-2273.JPG',
    // Ashley Wedding-2274-1 (dragged).tiff
    'Ashley Wedding-2280.JPG',
    'Ashley Wedding-2319.JPG',
    'Ashley Wedding-2451.JPG',
    'Ashley Wedding-2465.JPG',
    'Ashley Wedding-2474.JPG',
    // Ashley Wedding-2544-1 (dragged).tiff
    'Disney 12 trip-1947.JPG',
    'Disney 12 trip-1967.JPG',
    'Disney 12 trip-1979.JPG',
    'Doris visit April11-6649.JPG',
    'Doris visit April11-6656.JPG',
    'Doris visit April11-6667.JPG',
    'Doris visit April11-6677.JPG',
    // Europe 2013-0043.NEF
    "Joyce's 60th-2010.JPG",
    "Joyce's 60th-2027.JPG",
    "Joyce's 60th-2046.JPG",
    "Joyce's 60th-2064.JPG",
    "Joyce's 60th-2065.JPG",
    "Joyce's 60th-2067.JPG",
    "Joyce's 60th-2069.JPG",
    "Joyce's 60th-2071.JPG",
    "Joyce's 60th-2086.JPG",
    "Joyce's 60th-2104.JPG",
    // Joyce's 60th-2151-1 (dragged).tiff
    'West Coast Trail-6280057.JPG',
    'West Coast Trail-6280061.JPG',
    'West Coast Trail-6280062.JPG',
    'West Coast Trail-6280068.JPG',
    'West Coast Trail-6280077.JPG',
    'West Coast Trail-6280097.JPG',
    'West Coast Trail-6280105.JPG',
    'West Coast Trail-6290144.JPG',
    'West Coast Trail-6300179.JPG',
    'West Coast Trail-6300188.JPG',
    'West Coast Trail-6300270.JPG',
    'West Coast Trail-7010277.JPG',
    'West Coast Trail-7010280.JPG',
    'West Coast Trail-7010290.JPG',
    'West Coast Trail-7010294.JPG',
    'West Coast Trail-7010324.JPG',
    'West Coast Trail-7020339.JPG',
    'West Coast Trail-7020363.JPG',
    'West Coast Trail-7020387.JPG',
    "West Coast Trail-7020398.JPG"
  ]
})