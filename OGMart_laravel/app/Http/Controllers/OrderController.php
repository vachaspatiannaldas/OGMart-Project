<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\order;
use App\Models\shopee_bill;
use App\Models\product;
use App\Models\Customerdetail;

use DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orderdata = order::get();
        return response()->json($orderdata);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    public function Billget()
    {
      $bill=shopee_bill::get();
      return response()->json($bill);
    }
    public function Productget()
    {
      $product=product::get();
      return response()->json($product);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $bid=$request->get('bid');
        $pid=$request->get('pid');
        $price=$request->get('price');
        $disc=$request->get('disc');
        $qty=$request->get('qty');
        $total=$request->get('total');
        $user_id=$request->get('user_id');


        $arr=array();
        $order = new order([
            'bid'=>$bid,
            'pid'=>$pid,
            'price'=>$price,
            'disc'=>$disc,
            'qty'=>$qty,
            'total'=>$total,
            'user_id'=>$user_id
        ]);
        $order->save();
        $data['status']="success";
        $data['msg']="data Insert";
        array_push($arr,$data);
        
        return response()->json($arr);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = order::where('id',$id)->first();
        return response()->json($order);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $order = order::where('id',$id)->first();
        return response()->json($order);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $arr=array();
        $bid=$request->get('bid');
        $pid=$request->get('pid');
        $price=$request->get('price');
        $disc=$request->get('disc');
        $qty=$request->get('qty');
        $total=$request->get('total');

        $orderup=order::find($id);
        $orderup->bid=$bid;
        $orderup->pid=$pid;
        $orderup->price=$price;
        $orderup->disc=$disc;
        $orderup->qty=$qty;
        $orderup->total=$total;
        $orderup->save();
        $data['status']="success";
        $data['msg']="data Updated";
        array_push($arr,$data);
        return response()->json($arr);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = order::find($id);
        $order->delete();
        return response()->json($order);
    }









public function deleteProduct($productId)
{
    // Find the product in the Customerdetail table
    $customerDetail = Customerdetail::where('user_id', $productId)->first();
    if ($customerDetail) {
        // Delete the product
        $customerDetail->delete();
    }

    // Find the corresponding shopee_bill record
    $shopeeBill = shopee_bill::where('user_id', $productId)->first();
    if ($shopeeBill) {
        // Delete the associated orders
        Order::where('bid', $shopeeBill->id)->delete();

        // Delete the shopee_bill record
        $shopeeBill->delete();
    }

    return response()->json(['status' => 'success', 'msg' => 'Product deleted']);
}






}
