arr=[
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-william-james-1562000241.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-winston-churchill-1562000243.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-helen-keller-2-1562000224.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-zig-ziglar-1562000244.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-theodore-roosevelt-1562000239.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-carol-burnett-1562000220.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-jimmy-dean-1562000225.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-demi-lovato-1562000222.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-williiam-james-2-1562000243.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-albert-einstein-1562000222.png?crop=1xw:1xh;center,top&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-ella-fitzgerald-1562000224.png?crop=1xw:1xh;center,top&resize=480:*",
  ]
  body=document.querySelector("body")
  img=document.createElement("img")
  img.setAttribute("src",arr[Math.floor(Math.random() * 11)]);
  body.append(img)