<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Validator;
use GuzzleHttp\Client;
use GuzzleHttp\Promise;

class UniversitiesController extends Controller
{
    /**
     * Create a new JSON response instance.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function searchUniversities(Request $request)
	{
	    $query = $request->input('q');
	    $newArray = [];
	    if($query){
			$client = new Client();
			
			$limit = 5;
			$promises = [
			    'byCountry' => $client->getAsync('http://universities.hipolabs.com/search', [
			        'query' => [
			            'country' => $query,
			            'limit'=>$limit
			        ],
			    ]),
			    'byName' => $client->getAsync('http://universities.hipolabs.com/search', [
			        'query' => [
			            'name' => $query,
			            'limit'=>$limit
			        ],
			    ]),
			    'byDomain' => $client->getAsync('http://universities.hipolabs.com/search', [
			        'query' => [
			            'domain' => $query,
			            'limit'=>$limit
			        ],
			    ]),
			];
			$responses = Promise\unwrap($promises);
			$byCountryResponse = json_decode($responses['byCountry']->getBody());
			$byNameResponse = json_decode($responses['byName']->getBody());
			$byDomainResponse = json_decode($responses['byDomain']->getBody());
			$result = [];
			if (is_array($byCountryResponse) && is_array($byNameResponse) && is_array($byDomainResponse)) {
			    $result = array_merge($byCountryResponse, $byNameResponse, $byDomainResponse);
			}
			$newArray = array_slice($result, 0, 5, true);
		}
		return response()->json(['universities' => $newArray]);
	}
}
