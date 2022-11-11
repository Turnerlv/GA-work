// const apiKey = "sj0zghlnen84draxe550o6uyc1t7pw9";

// async function productSearch() {

//   console.log("works!");

//   const requestURL = "https://api.bigcommerce.com/stores/6kalbbj4k4/v3/catalog/products";

//   const options = {
//     // host: 'https://api.bigcommerce.com',
//     method: 'GET',
//     mode: 'cors',
//     headers: {'Content-Type': 'application/json', 'X-Auth-Token': apiKey }
//   };
  
//   const bcResponse = await fetch(requestURL, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err)); 

  

//   const productData = await bcResponse.json(); 


//   console.log(productData);

// }

// document.addEventListener('DOMContentLoaded', function() {

//   productSearch();
// });








// ********************** All products ****************************

const productDataObject = {



    "data": [





      // ********************** Chicken ****************************
      {
        "id": 1,
        "name": "Chicken bone broth",
        "type": "physical",
        "sku": "BR-01",
        "description": "<p><span>Our chicken bone broth is sourced from 100% free-range chicken bones from local farmers. We steep the broth for 24 hours with a mix of wholesome veggies, purified water, apple cider vinegar and spices. We never add any preservatives or fillers. This is the best broth you can get!.</span></p>",
        "weight": 32,
        "width": 6,
        "depth": 6,
        "height": 6,
        "price": 12.99,
        "cost_price": 8,
        "retail_price": 10,
        "sale_price": 11.99,
        "map_price": 0,
        "tax_class_id": 0,
        "product_tax_code": "string",
        "categories": [
          0
        ],
        "brand_id": 0,
        "inventory_level": 1000,
        "inventory_warning_level": 20,
        "inventory_tracking": "none",
        "fixed_cost_shipping_price": 0,
        "is_free_shipping": true,
        "is_visible": true,
        "is_featured": true,
        "related_products": [
          0
        ],
        "warranty": "string",
        "bin_picking_number": "string",
        "layout_file": "string",
        "upc": "string",
        "search_keywords": "string",
        "availability_description": "string",
        "availability": "available",
        "gift_wrapping_options_type": "any",
        "gift_wrapping_options_list": [
          0
        ],
        "sort_order": 1,
        "condition": "New",
        "is_condition_shown": true,
        "order_quantity_minimum": 5,
        "order_quantity_maximum": 50,
        "page_title": "string",
        "meta_keywords": [
          "string"
        ],
        "meta_description": "Chicken bone broth",
        "view_count": 0,
        "preorder_release_date": "2019-08-24T14:15:22Z",
        "preorder_message": "string",
        "is_preorder_only": true,
        "is_price_hidden": true,
        "price_hidden_label": "string",
        "custom_url": {
          "url": "string",
          "is_customized": true
        },
        "open_graph_type": "product",
        "open_graph_title": "string",
        "open_graph_description": "string",
        "open_graph_use_meta_description": true,
        "open_graph_use_product_name": true,
        "open_graph_use_image": true,
        "brand_name or brand_id": "Scrap & Bone",
        "gtin": "string",
        "mpn": "string",
        "reviews_rating_sum": 3,
        "reviews_count": 4,
        "total_sold": 80,
        "custom_fields": [
          {
            "id": 0,
            "name": "tagline",
            "value": "Nurishing. Free-range. Clucking-awesome."
          },
          {
            "id": 1,
            "name": "ingredients",
            "value": ["Free-range chicken bones and feet", "Organic onions", "Organic carrots", "Organic Celery", "Himalayan pink salt", "Organic black peppercorns", "Organic bay leaves"]
          }

        ],
        "bulk_pricing_rules": [
          {
            "id": 0,
            "quantity_min": 5,
            "quantity_max": 50,
            "type": "price",
            "amount": 10
          }
        ],
        "images": [
        // ************ Primary flat image *************//
        {
            "image":"../global/images/Flat_Chicken - classic chicken.png", 
            "thumb":"../global/images/Flat_Chicken - classic chicken.png",
            "alt":"Chicken bone broth"
        },
        // ************ What's inside image *************//
        {
          "image":"../global/images/Whats inside_chicken.png", 
          "thumb":"../global/images/Whats inside_chicken.png",
          "alt":"Chicken bone broth ingredients"
        },
        // ************ Open container image *************//
        {
        "image":"../global/images/Open container_chicken@2x.png", 
        "thumb":"../global/images/Open container_chicken@2x.png",
        "alt":"Chicken bone broth open"
        },
        // ************ Perspective container image *************//
        {
          "image":"../global/images/perspective_chicken.png", 
          "thumb":"../global/images/perspective_chicken.png",
          "alt":"Chicken bone broth alternate"
        },
        // ************ Spicy variant image *************//
        {
          "image":"../global/images/Flat_Chicken - spicy chicken.png", 
          "thumb":"../global/images/Flat_Chicken - spicy chicken.png",
          "alt":"Chicken bone broth - spicy"
        },
        // ************ Alt variant image *************//
        {
          "image":"../global/images/Flat_Chicken - lemon chicken.png", 
          "thumb":"../global/images/Flat_Chicken - lemon chicken.png",
          "alt":"Chicken bone broth - lemon"
        },


        ],
        
        "option_set_id": 0,
        "option_set_display": "Flavors",
        "variants": [
          {
            "cost_price": 8,
            "price": 12.99,
            "sale_price": 11.99,
            "retail_price": 10,
            "weight": 32,
            "width": 6,
            "height": 6,
            "depth": 6,
            "is_free_shipping": true,
            "fixed_cost_shipping_price": 0,
            "purchasing_disabled": true,
            "purchasing_disabled_message": "Currently unavailable",
            "upc": "string",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "string",
            "mpn": "string",
            "gtin": "012345678905",
            "id": 0,
            "product_id": 0,
            "sku": "string",
            "sku_id": 0,
            "option_values": [
              {
                "option_display_name": "Flavor",
                "label": "Classic chicken",
                "id": 1,
                "option_id": 1
              },
              {
                "option_display_name": "Flavor",
                "label": "Spicy chicken",
                "id": 1,
                "option_id": 2
              },
              {
                "option_display_name": "Flavor",
                "label": "Lemon chicken",
                "id": 1,
                "option_id": 3
              }
            ],
            "calculated_price": 0,
            "calculated_weight": 0
          }
        ]
      },

      //************************    BEEF   ********************************** */

      {
        "id": 2,
        "name": "Beef bone broth",
        "type": "physical",
        "sku": "BR-02",
        "description": "<p><span>Our beef bone broth is sourced from 100% grass-fed Beef bones from local farmers. We steep the broth for 24 hours with a mix of wholesome veggies, purified water, apple cider vinegar and spices. We never add any preservatives or fillers. This is the best broth you can get!.</span></p>",
        "weight": 32,
        "width": 6,
        "depth": 6,
        "height": 6,
        "price": 12.99,
        "cost_price": 8,
        "retail_price": 10,
        "sale_price": 11.99,
        "map_price": 0,
        "tax_class_id": 0,
        "product_tax_code": "string",
        "categories": [
          0
        ],
        "brand_id": 0,
        "inventory_level": 1000,
        "inventory_warning_level": 20,
        "inventory_tracking": "none",
        "fixed_cost_shipping_price": 0,
        "is_free_shipping": true,
        "is_visible": true,
        "is_featured": true,
        "related_products": [
          0
        ],
        "warranty": "string",
        "bin_picking_number": "string",
        "layout_file": "string",
        "upc": "string",
        "search_keywords": "string",
        "availability_description": "string",
        "availability": "available",
        "gift_wrapping_options_type": "any",
        "gift_wrapping_options_list": [
          0
        ],
        "sort_order": 1,
        "condition": "New",
        "is_condition_shown": true,
        "order_quantity_minimum": 5,
        "order_quantity_maximum": 50,
        "page_title": "string",
        "meta_keywords": [
          "string"
        ],
        "meta_description": "Beef bone broth",
        "view_count": 0,
        "preorder_release_date": "2019-08-24T14:15:22Z",
        "preorder_message": "string",
        "is_preorder_only": true,
        "is_price_hidden": true,
        "price_hidden_label": "string",
        "custom_url": {
          "url": "string",
          "is_customized": true
        },
        "open_graph_type": "product",
        "open_graph_title": "string",
        "open_graph_description": "string",
        "open_graph_use_meta_description": true,
        "open_graph_use_product_name": true,
        "open_graph_use_image": true,
        "brand_name or brand_id": "Scrap & Bone",
        "gtin": "string",
        "mpn": "string",
        "reviews_rating_sum": 3,
        "reviews_count": 4,
        "total_sold": 80,
        "custom_fields": [
          {
            "id": 0,
            "name": "tagline",
            "value": "Hearty. Filling. Grazing-amazing."
          },
          {
            "id": 1,
            "name": "ingredients",
            "value": ["Grass-fed Beef bones", "Organic onions", "Organic carrots", "Organic Celery", "Himalayan pink salt", "Organic black peppercorns", "Organic bay leaves"]
          }
        ],
        "bulk_pricing_rules": [
          {
            "id": 0,
            "quantity_min": 5,
            "quantity_max": 50,
            "type": "price",
            "amount": 10
          }
        ],
        "images": [
        // ************ Primary flat image *************//
        {
            "image":"../global/images/Flat_Beef - original beef.png", 
            "thumb":"../global/images/Flat_Beef - original beef.png",
            "alt":"Beef bone broth"
        },
        // ************ What's inside image *************//
        {
          "image":"../global/images/Whats inside_beef.png", 
          "thumb":"../global/images/Whats inside_beef.png",
          "alt":"Beef bone broth ingredients"
        },
        // ************ Open container image *************//
        {
        "image":"../global/images/Open container_beef@2x.png", 
        "thumb":"../global/images/Open container_beef@2x.png",
        "alt":"Beef bone broth open"
        },
        // ************ Perspective container image *************//
        {
          "image":"../global/images/perspective_beef.png", 
          "thumb":"../global/images/perspective_beef.png",
          "alt":"Beef bone broth alternate"
        },
        // ************ Spicy variant image *************//
        {
          "image":"../global/images/Flat_Beef - spicy beef.png", 
          "thumb":"../global/images/Flat_Beef - spicy beef.png",
          "alt":"Beef bone broth - spicy"
        },
        // ************ Alt variant image *************//
        {
          "image":"../global/images/Flat_Beef - turmeric beef.png", 
          "thumb":"../global/images/Flat_Beef - turmeric beef.png",
          "alt":"Beef bone broth - turmeric"
        },


        ],
        
        "option_set_id": 0,
        "option_set_display": "Flavors",
        "variants": [
          {
            "cost_price": 8,
            "price": 12.99,
            "sale_price": 11.99,
            "retail_price": 10,
            "weight": 32,
            "width": 6,
            "height": 6,
            "depth": 6,
            "is_free_shipping": true,
            "fixed_cost_shipping_price": 0,
            "purchasing_disabled": true,
            "purchasing_disabled_message": "Currently unavailable",
            "upc": "string",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "string",
            "mpn": "string",
            "gtin": "012345678905",
            "id": 0,
            "product_id": 0,
            "sku": "string",
            "sku_id": 0,
            "option_values": [
              {
                "option_display_name": "Flavor",
                "label": "Original beef",
                "id": 1,
                "option_id": 1
              },
              {
                "option_display_name": "Flavor",
                "label": "Thai-chili beef",
                "id": 1,
                "option_id": 2
              },
              {
                "option_display_name": "Flavor",
                "label": "Turmeric beef",
                "id": 1,
                "option_id": 3
              }
            ],
            "calculated_price": 0,
            "calculated_weight": 0
          }
        ]
      },


      //************************   Fish   ********************************** */

      {
        "id": 3,
        "name": "Fish bone broth",
        "type": "physical",
        "sku": "BR-03",
        "description": "<p><span>Our fish bone broth is sourced from 100% wild-caught Atlantic Snapper from local fishermen. We steep the broth for 24 hours with a mix of wholesome veggies, purified water, apple cider vinegar and spices. We never add any preservatives or fillers. This is the best broth you can get!.</span></p>",
        "weight": 32,
        "width": 6,
        "depth": 6,
        "height": 6,
        "price": 12.99,
        "cost_price": 8,
        "retail_price": 10,
        "sale_price": 11.99,
        "map_price": 0,
        "tax_class_id": 0,
        "product_tax_code": "string",
        "categories": [
          0
        ],
        "brand_id": 0,
        "inventory_level": 1000,
        "inventory_warning_level": 20,
        "inventory_tracking": "none",
        "fixed_cost_shipping_price": 0,
        "is_free_shipping": true,
        "is_visible": true,
        "is_featured": true,
        "related_products": [
          0
        ],
        "warranty": "string",
        "bin_picking_number": "string",
        "layout_file": "string",
        "upc": "string",
        "search_keywords": "string",
        "availability_description": "string",
        "availability": "available",
        "gift_wrapping_options_type": "any",
        "gift_wrapping_options_list": [
          0
        ],
        "sort_order": 1,
        "condition": "New",
        "is_condition_shown": true,
        "order_quantity_minimum": 5,
        "order_quantity_maximum": 50,
        "page_title": "string",
        "meta_keywords": [
          "string"
        ],
        "meta_description": "Beef bone broth",
        "view_count": 0,
        "preorder_release_date": "2019-08-24T14:15:22Z",
        "preorder_message": "string",
        "is_preorder_only": true,
        "is_price_hidden": true,
        "price_hidden_label": "string",
        "custom_url": {
          "url": "string",
          "is_customized": true
        },
        "open_graph_type": "product",
        "open_graph_title": "string",
        "open_graph_description": "string",
        "open_graph_use_meta_description": true,
        "open_graph_use_product_name": true,
        "open_graph_use_image": true,
        "brand_name or brand_id": "Scrap & Bone",
        "gtin": "string",
        "mpn": "string",
        "reviews_rating_sum": 3,
        "reviews_count": 4,
        "total_sold": 80,
        "custom_fields": [
          {
            "id": 0,
            "name": "tagline",
            "value": "Holistic. Umami. Fin-tastic."
          },
          {
            "id": 1,
            "name": "ingredients",
            "value": ["Wild-caught snapper heads & bones", "Organic onions", "Organic carrots", "Organic Celery", "Himalayan pink salt", "Organic black peppercorns", "Organic bay leaves"]
          }
        ],
        "bulk_pricing_rules": [
          {
            "id": 0,
            "quantity_min": 5,
            "quantity_max": 50,
            "type": "price",
            "amount": 10
          }
        ],
        "images": [
        // ************ Primary flat image *************//
        {
            "image":"../global/images/Flat_Fish - classic fish.png", 
            "thumb":"../global/images/Flat_Fish - classic fish.png",
            "alt":"Fish bone broth"
        },
        // ************ What's inside image *************//
        {
          "image":"../global/images/Whats inside_fish.png", 
          "thumb":"../global/images/Whats inside_fish.png",
          "alt":"Fish bone broth ingredients"
        },
        // ************ Open container image *************//
        {
        "image":"../global/images/Open container_fish@2x.png", 
        "thumb":"../global/images/Open container_fish@2x.png",
        "alt":"Fish bone broth open"
        },
        // ************ Perspective container image *************//
        {
          "image":"../global/images/perspective_fish.png", 
          "thumb":"../global/images/perspective_fish.png",
          "alt":"Fish bone broth alternate"
        },
        // ************ Spicy variant image *************//
        {
          "image":"../global/images/Flat_Fish - spicy fish.png", 
          "thumb":"../global/images/Flat_Fish - spicy fish.png",
          "alt":"Fish bone broth - spicy"
        },
        // ************ Alt variant image *************//
        {
          "image":"../global/images/Flat_Fish lemon fish.png", 
          "thumb":"../global/images/Flat_Fish lemon fish.png",
          "alt":"Fish bone broth - lemon"
        },


        ],
        
        "option_set_id": 0,
        "option_set_display": "Flavors",
        "variants": [
          {
            "cost_price": 8,
            "price": 12.99,
            "sale_price": 11.99,
            "retail_price": 10,
            "weight": 32,
            "width": 6,
            "height": 6,
            "depth": 6,
            "is_free_shipping": true,
            "fixed_cost_shipping_price": 0,
            "purchasing_disabled": true,
            "purchasing_disabled_message": "Currently unavailable",
            "upc": "string",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "string",
            "mpn": "string",
            "gtin": "012345678905",
            "id": 0,
            "product_id": 0,
            "sku": "string",
            "sku_id": 0,
            "option_values": [
              {
                "option_display_name": "Flavor",
                "label": "Classic French snapper",
                "id": 1,
                "option_id": 1
              },
              {
                "option_display_name": "Flavor",
                "label": "Habanero-lime snapper",
                "id": 1,
                "option_id": 2
              },
              {
                "option_display_name": "Flavor",
                "label": "Lemon-basil snapper",
                "id": 1,
                "option_id": 3
              }
            ],
            "calculated_price": 0,
            "calculated_weight": 0
          }
        ]
      }
    ]
  }

