import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "ROUND",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061613/House%20Of%20Glass/1_eestfh.jpg",
    description:
      "Wbho doesn't love Perfectly symmetrical Round Cuties, A little Harry Potter Vibes Eh? ",
  },
  {
    _id: uuid(),
    categoryName: "RETRO",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/2_urb8za.jpg",
    description: "This tale was set in the 1800s's for the folks of culture",
  },
  {
    _id: uuid(),
    categoryName: "TRANSPARENT",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/3_cfr4hd.jpg",
    description:
      "You're soul might be opaque but your glasses don't have to be",
  },
  {
    _id: uuid(),
    categoryName: "SUNGLASSES",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/4_bpuxos.jpg",
    description: "The eyes don't need Vitamin D! ( Probably )",
  },
  {
    _id: uuid(),
    categoryName: "CATEYE",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/5_cknv6i.jpg",
    description:
      "Meow. That's it. I say any more, I'll be attacked by the Cat Gods",
  },
  {
    _id: uuid(),
    categoryName: "RIMLESS",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/6_pkcskv.jpg",
    description: "Some people live on the edge, or in this case edgeless",
  },
  {
    _id: uuid(),
    categoryName: "VINCENTCHASE",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1649249663/House%20Of%20Glass/Categories/SO-Polarized-Sunglasses_vincent-chase-vc-5158-p-black-green-1212-so-aviator-sun_sun_un_n___123_4_3_1_1_218_02_2022-removebg-preview_hdxqo2.png",
    description: "Chase Perfection. Chase Clarity.",
  },
  {
    _id: uuid(),
    categoryName: "JOHNJACOBS",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1649256995/House%20Of%20Glass/Categories/john-jacobs-jj-e13719-foll-ram-c2-eeyeglasses_g_0002_1-removebg-preview_bkh9gu.png",
    description: "Titanium, Crafted to Perfection.",
  },
  {
    _id: uuid(),
    categoryName: "RAYBAN",
    img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1649257335/House%20Of%20Glass/Categories/john-jacobs-full-rim-aviator-jj-s12504-c4-sunglasses_g_1901-removebg-preview_rzwazk.png",
    description: "Perfection and CLass, Refined with time.",
  },
];
