https://optimoroute.com/api/#data-objects-order-object
https://www.wix.com/velo/reference/wix-http-functions/introduction

$(document).ready(function() {
  $('#fetchButton').click(function() {

import wixStoresBackend from 'wix-stores-backend';
import wixData from 'wix-data';

export function getOrdersLink(orderIds) {
  return wixStoresBackend.getOrdersLink(orderIds);
}

// Get IDs of the last 10 paid orders
export function getPaidOrderIds() {
  let options = {
    "suppressAuth": true
  };

  return wixData.query('Stores/Orders')
    .eq("paymentStatus", 'PAID')
    .descending('_dateCreated')
    .limit(10)
    .find(options)
    .then((results) => {
      if (results.items.length > 0) {
        // Order IDs found
        const orderIds = results.items.map(order => order._id)
        return orderIds;
      } else {
        return "No orders found";
      }
    })
    .catch((error) => {
      return error;
    })
}

import { getOrdersLink, getPaidOrderIds } from 'backend/orders';

getPaidOrderIds()
  .then((orderIds) => {
    getOrdersLink(orderIds)
      .then((link) => {
        // Orders PDF link retrieved
        const orderPdfUrl = link;
      })
      .catch((error) => {
        // Orders PDF link not retrieved
        console.error(error)
      })
  })
  .catch((error) => {
    // Orders not retrieved from backend
    console.error(error)
  });
    });
  });
