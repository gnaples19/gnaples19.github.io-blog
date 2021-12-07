/* https://optimoroute.com/api/#data-objects-order-object
https://www.wix.com/velo/reference/wix-http-functions/introduction

$(document).ready(function() {
  $('#fetchButton').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.thecatapi.com/v1/images/search?format=json",
      success: function(results) {
        console.log(results["0"]);
          console.log("testing success");
          $('#cat').attr("src", results[0]["url"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  */

package com.route4me.sdk.examples.routes;

import com.route4me.sdk.exception.APIException;
import com.route4me.sdk.services.routing.Address;
import com.route4me.sdk.services.routing.Route;
import com.route4me.sdk.services.routing.RoutesRequest;
import com.route4me.sdk.services.routing.RoutingManager;

import java.util.List;

/**
 * @author juan
 */
public class GetRoute {

    public static void main(String[] args) {
        String apiKey = "11111111111111111111111111111111";
        RoutingManager routeManager = new RoutingManager(apiKey);
        try {
            List<Route> routes = routeManager.getRoutes(new RoutesRequest().setLimit(10));
            //fetches complete data
            Route r = routeManager.getRoute(new RoutesRequest().setNotes(Boolean.TRUE).setId(routes.get(0).getId()));
            System.out.println(r);
            for (Address address : r.getAddresses()) {
                    System.out.println("Address: " + address.getAddress() + " Running Distance: " + address.getManifest().get("running_distance"));
            }
        } catch (APIException e) {
            //handle exceptions
            e.printStackTrace();
        }
    }


}
