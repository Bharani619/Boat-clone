const productArr = [
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_255x255.png?v=1642405569",
        description:"boAt Airdopes 131 - Wireless Earbuds",
        price:1299.00,
        category:"airpodes,wireless",
        striked:2200
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_255x255.png?v=1612765376",
        description:"BOAt Airdopes 121 v2",
        price:1399.00,
        category:"airpodes,wireless",
        striked:2000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_255x255.png?v=1625046016",
        description:"BOAt Airdopes 441-Wireless Earbuds",
        price:1999.00,
        category:"airpodes,wireless",
        striked:2500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/product-Image_255x255.png?v=1625813323",
        description:"Airdopes 101 Made In India",
        price:1499.00,
        category:"airpodes,wireless",
        striked:2000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/451v2_blue_255x255.png?v=1641801490",
        description:"boAt Airdopes 451v2",
        price:2999.00,
        category:"airpodes,wireless",
        striked:3000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/86b7c390-4a4b-45d7-91e1-65007653b71e_255x255.png?v=1625045261",
        description:"boAt Airdopes 381 - In Ear Wireless Earbuds",
        price:1999.00,
        category:"airpodes,wireless",
        striked:2700
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CA131-main_255x255.png?v=1639987804",
        description:"Airdopes 131 - Captain America Marvel Edition",
        price:1499.00,
        category:"airpodes,wireless",
        striked:2600
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-main_255x255.png?v=1639988622",
        description:"Airdopes 131 - Iron Man Marvel Edition",
        price:1499.00,
        category:"airpodes,wireless",
        striked:2300
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-1_6b720b9d-47f9-45d4-92b4-575058fb993b_255x255.png?v=1626875709",
        description:"boAt Airdopes 141",
        price:1329.00,
        category:"airpodes,wireless",
        striked:2000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/218997d1-3fe9-4a19-809c-94a8a2d05273_255x255.png?v=1625045659",
        description:"BOAT Airdopes 441 Pro - Bluetooth Wireless Earbuds",
        price:1329.00,
        category:"airpodes,wireless",
        striked:2000
    },
    
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_1_255x255.png?v=1627276362",
        description:"boAt Rockerz 245 V2",
        price:999.00,
        category:"wireless",
        striked:2000
    },
    
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_255x255.png?v=1625045615",
        description:"boAt Rockerz 255 Pro",
        price:1399.00,
        category:"wireless",
        striked:2000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-green_fb9aa506-5e26-4d97-b745-ca48aa7c0234_255x255.png?v=1614587254",
        description:"TRebel Wireless 255 Pro",
        price:1499.00,
        category:"wireless",
        striked:2100
    },
    
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_255x255.png?v=1625046105",
        description:"boAt Rockerz 235 V2",
        price:999.00,
        category:"wireless",
        striked:1400
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_255x255.png?v=1625045744",
        description:"boAt Rockerz 450",
        price:1199.00,
        category:"wireless",
        striked:2600
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_255x255.png?v=1641801688",
        description:"boAt Rockerz 330",
        price:1499.00,
        category:"wireless",
        striked:2500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5d5377dc-d3dd-48ba-8ec9-2a1630146d8d_255x255.png?v=1625045983",
        description:"boAt Rockerz 510",
        price:1299.00,
        category:"wireless",
        striked:2500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R260Packaging1.2_255x255.png?v=1639641170",
        description:"boAt Rockerz 260",
        price:1199.00,
        category:"wireless",
        striked:2600
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_255x255.png?v=1641801662",
        description:"boAt Rockerz 233",
        price:1399.00,
        category:"wireless",
        striked:2500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/463af1f7-e428-4399-9452-47e044cfb4cb_255x255.png?v=1625046507",
        description:"boAt Rockerz 255",
        price:1099.00,
        category:"wireless",
        striked:2700
    },
    
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_255x255.png?v=1645164257",
        description:"boAt Watch Xtend",
        price:2799.00,
        category:"watches",
        striked:3500
    }, 
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_255x255.png?v=1625045106",
        description:"boAt Storm",
        price:2499.00,
        category:"watches",
        striked:3700
    }, 
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_255x255.png?v=1647765304",
        description:"Watch Wave Pro",
        price:2899.00,
        category:"watches",
        striked:3090
    }, 
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_86ea6392-558a-4943-ab86-f9f12fe8f4d9_255x255.png?v=1646393709",
        description:"TRebel Watch Xtend",
        price:2999.00,
        category:"watches",
        striked:3700
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_d2f6ad16-c97c-4600-88c1-b835fd58c647_255x255.png?v=1646394582",
        description:"Watch Blaze",
        price:3499.00,
        category:"watches",
        striked:4500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_46f69d85-75a0-483c-a215-2a29ee068b3c_255x255.png?v=1646394746",
        description:"TRebel Watch Blaze",
        price:3499.00,
        category:"watches",
        striked:4600
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_255x255.png?v=1625045743",
        description:"boAt Watch Blaze",
        price:2499.00,
        category:"watches",
        striked:4000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainblack_255x255.png?v=1640237575",
        description:"boAt Watch Iris",
        price:4499.00,
        category:"watches",
        striked:5000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Black_2_255x255.png?v=1639486284",
        description:"boAt Watch Mystiq",
        price:3499.00,
        category:"watches",
        striked:4500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_red_05088d32-6110-4a8f-b4f1-77483c98cadb_255x255.png?v=1646391459",
        description:"TRebel Watch Vertex",
        price:2999.00,
        category:"watches",
        striked:3600
    },
    
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_255x255.png?v=1625046259",
        description:"boAt BassHeads 100",
        price:399.00,
        category:"wired",
        striked:500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_255x255.png?v=1574927262",
        description:"boAt BassHeads 103",
        price:379.00,
        category:"wired",
        striked:500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-102-red_255x255.png?v=1633152280",
        description:"boAt BassHeads 102",
        price:399.00,
        category:"wired",
        striked:500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e51a6a86-ed55-4a8b-ad4b-71ec48d53791_255x255.png?v=1625046491",
        description:"TRebel BassHeads 152",
        price:499.00,
        category:"wired",
        striked:700
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ec459fef-d8ad-4b64-971a-501ea8f1bc0b_255x255.png?v=1625046597",
        description:"BOAT BassHeads 152",
        price:499.00,
        category:"wired",
        striked:700
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint--orange_255x255.png?v=1634371640",
        description:"TRebel BassHeads 100",
        price:399.00,
        category:"wired",
        striked:500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eab9128d-65cf-42ce-83a1-03492ec6157d_255x255.png?v=1625046386",
        description:"BOAT BassHeads 242",
        price:549.00,
        category:"wired",
        striked:700
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_255x255.png?v=1623787656",
        description:"BOAT BassHeads 182",
        price:491.00,
        category:"wired",
        striked:600
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8a80ebca-13b6-4329-b8dd-e2e152bdcf6b_255x255.png?v=1625046023",
        description:"BOAT BassHeads 225",
        price:549.00,
        category:"wired",
        striked:740
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_6370be21-3c2f-48a8-bb18-edc49a667081_255x255.png?v=1643619646",
        description:"BOAT BassHeads 950v2",
        price:899.00,
        category:"wired",
        striked:1000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5839562-1b21-4e3f-965c-741cf758a335_255x255.png?v=1625046391",
        description:"TRebel BassHeads 242",
        price:549.00,
        category:"wired",
        striked:600
    },
    
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_reed_255x255.png?v=1635842501",
        description:"Stone Grenade",
        price:1499.00,
        category:"speakers",
        striked:2000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_8549ad38-acec-45d6-bba4-8b202a9bfdc1_255x255.png?v=1646976976",
        description:"boAt Stone 500",
        price:1999.00,
        category:"speakers",
        striked:2530
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main---1_255x255.png?v=1640081208",
        description:"boAt Party Pal 50",
        price:3999.00,
        category:"speakers",
        striked:4550
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ce5655c3-e83f-47ad-8f9f-6db17f896a1b_255x255.png?v=1625045737",
        description:"Stone 260",
        price:1499.00,
        category:"speakers",
        striked:2500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6a69eaeb-36b9-438c-a8c3-7ff5de3e6ead_255x255.png?v=1625046393",
        description:"BOAT Stone 180",
        price:999.00,
        category:"speakers",
        striked:1400
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-1_35ca2d35-3e30-49ec-bb17-dc55a1abc589_255x255.png?v=1640073282",
        description:"boAt Stone 620",
        price:2199.00,
        category:"speakers",
        striked:3400
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/74a6b20d-9842-49da-b279-022812b81e1f_255x255.png?v=1625045535",
        description:"BOAT Stone 350",
        price:1449.00,
        category:"speakers",
        striked:2700
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/91efc297-d380-4ccf-a70e-b9ab9ab1ad5b_255x255.png?v=1625045298",
        description:"Stone 650",
        price:1799.00,
        category:"speakers",
        striked:2800
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main3_255x255.png?v=1632893559",
        description:"BOAT Stone 1200F",
        price:3999.00,
        category:"speakers",
        striked:4700
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/448e5d44-7829-4597-9238-aebe7554b9a4_255x255.png?v=1625045368",
        description:"Stone 190",
        price:999.00,
        category:"speakers",
        striked:2000
    },
    
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1160-1_1cd9e34a-6cb5-475e-abd8-3af626084116_255x255.png?v=1629091898",
        description:"Aavante Bar 1150",
        price:4999.00,
        category:"soundbar",
        striked:5500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1160-1_255x255.png?v=1613736230",
        description:"Aavante Bar 1160",
        price:4999.00,
        category:"soundbar",
        striked:5700
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_08bd601e-4adf-40ea-8dab-f918bcdffe90_255x255.png?v=1641997435",
        description:"Aavante Bar 1400",
        price:8999.00,
        category:"soundbar",
        striked:9500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/73630972-9d9d-416b-aeeb-861374dfc7a7_255x255.png?v=1623813139",
        description:"Aavante Bar 1300",
        price:4999.00,
        category:"soundbar",
        striked:6000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1800-1_255x255.png?v=1613736244",
        description:"Aavante Bar 1800",
        price:8999.00,
        category:"soundbar",
        striked:9800
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_affc1a7f-f714-4952-9c58-3de269539350_255x255.png?v=1645099233",
        description:"Aavante Bar 1750",
        price:10999.00,
        category:"soundbar",
        striked:11000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1500-1_2fcd5acb-56af-4fff-bc39-c9c336772378_255x255.png?v=1622623083",
        description:"Aavante Bar 1550",
        price:8999.00,
        category:"soundbar",
        striked:9500
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Ab-550_255x255.png?v=1639053174",
        description:"Aavante Bar 550",
        price:1999.00,
        category:"soundbar",
        striked:3000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2f5f178c-00a0-496e-b178-4b32a8f0b38c_255x255.png?v=1625046020",
        description:"Aavante Bar 1700D",
        price:9999.00,
        category:"soundbar",
        striked:11000
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AB1600DPP_12_1_255x255.png?v=1637211337",
        description:"Aavante Bar 1600D",
        price:10999.00,
        category:"soundbar",
        striked:13000
    },

    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/77081a14-84ab-4a56-9977-9c902c341e5a_255x255.png?v=1625045422",
        description:"BOAT Mask",
        price:499.00,
        category:"Mobile accessories",
        striked:500
    },
       
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ltg1_255x255.png?v=1623813149",
        description:"LTG 500 Indestructible Apple Certified Lighting Cable 1 Meter",
        price:599.00,
        category:"Mobile accessories,USB",
        striked:7000
    },

     {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-ltg-500_255x255.png?v=1613736579",
        description:"Rugged V3 Micro USB 1.5 Meter",
        price:299.00,
        category:"Mobile accessories,USB",
        striked:300
    },

     {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_b644bc3a-684b-4252-be8d-6b7f01579ecf_255x255.png?v=1643021387",
        description:"boAt WCD 20W PD Wall Charger",
        price:599.00,
        category:"Mobile accessories,USB",
        striked:6000
         
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-ltg-500_255x255.png?v=1613736579",
        description:"LTG 500 Indestructible Apple Certified Lighting Cable 2 Meter",
        price:799.00,
        category:"Mobile accessories,USB",
        striked:900
    },

     {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img_e38245f3-a843-4604-8698-797f66913dd7_255x255.png?v=1638944254",
        description:"boAt WCD 22.5W QCPD",
        price:799.00,
        category:"Mobile accessories,USB",
        striked:970
    },

     {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_255x255.png?v=1643022100",
        description:"boAt WCD 36W QC Charger",
        price:799.00,
        category:"Mobile accessories,USB",
        striked:870
         
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a438d4b3-8973-4e66-b05f-d36742e83b7e_255x255.png?v=1618923027",
        description:"BOAT Micro USB 550",
        price:149.00,
        category:"Mobile accessories,USB",
        striked:200
    },

     {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner2-product_255x255.png?v=1622705253",
        description:"Micro USB 150 1.5 Meter",
        price:499.00,
        category:"Mobile accessories,USB",
        striked:500
    },

     {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bb0fe87d-3ff0-472c-ba37-4b6e07d36114_255x255.png?v=1625045531",
        description:"AUX 500",
        price:349.00,
        category:"Mobile accessories,USB",
        striked:600
    },

     
]

localStorage.setItem("Allproducts",JSON.stringify(productArr));