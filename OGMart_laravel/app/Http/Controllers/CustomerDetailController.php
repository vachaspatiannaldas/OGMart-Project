<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customerdetail;
use App\Models\shopee_bill;
use App\Models\order;
use App\Models\Cart;
use DB;
use Illuminate\Support\Facades\Mail;


class CustomerDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customerdata = Customerdetail::get();
        return response()->json($customerdata);
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name=$request->get('name');
        $mobile=$request->get('mobile');
        $email=$request->get('email');
        $address=$request->get('address');
        $city=$request->get('city');
        $pin=$request->get('pin');
        $bill_amount=$request->get('bill_amount');
        $bill_date=$request->get('bill_date');
        $pid=json_decode($request->get('pdata'));
        $payment_mode=$request->get('payment_mode');
        $user_id=$request->get('user_id');

        $uid=$request->get('uid');
        // return var_dump($pid);
        // return response()->json($pid);

        
        $arr=array();
        $shopee_customer = new Customerdetail([
            'name'=>$name,
            'mobile'=>$mobile,
            'email'=>$email,
            'address'=>$address,
            'city'=>$city,
            'pin'=>$pin,
            'payment_mode'=>$payment_mode,
            'user_id'=>$user_id,
            
            
         
        ]);
        $shopee_customer->save();

        $cid = Customerdetail::get()->max('id');

         $shopee_bill = new shopee_bill([
            'cid'=>$cid,
            'bill_amount'=>$bill_amount,
            'bill_discount'=>'0',
            'bill_date'=>$bill_date,
            'pay_made'=>'Cash',
            'delivery_status'=>'Pending',
            'bill_status'=>'Pending',
            'exh_status'=>'Pending',
         
        ]);
        $shopee_bill->save();


        $bid = shopee_bill::get()->max('id');

        foreach($pid as $p)
        {
            $price = ($p->price_sale * $p->discount) /100;
            $total = ($p->price_sale - $price) * $p->pqty;

            $order = new order([
            'bid'=>$bid,
            'pid'=>$p->pid,
            'price'=>$p->price_sale,
            'disc'=>$p->discount,
            'qty'=>$p->pqty,
            'total'=>$total,
            'user_id'=>$user_id,
         
        ]);
        $order->save();
        }
         

        $data['status']="success";
        $data['msg']="data Insert";
        array_push($arr,$data);

        foreach($pid as $p)
        {
        $pro=DB::table('carts')
          ->where('carts.pid','=',$p->id)
          ->where('carts.uid','=',$uid)      
          ->select('*', 'carts.pid as pid')
          ->get();
          $cid=$pro[0]->id;
          $cart = Cart::find($cid);
            $cart->delete();
        }
        
        
        return response()->json($arr);

       // return response();

    }

    public function validateorder(Request $request)
    {
         $name=$request->get('name');
        $mobile=$request->get('mobile');
        $email=$request->get('email');
        $address=$request->get('address');
        $city=$request->get('city');
        $pin=$request->get('pin');
        $bill_amount=$request->get('bill_amount');
        $bill_date=$request->get('bill_date');
        $pid=json_decode($request->get('pdata'));
        $payment_mode=$request->get('payment_mode');
        $payment_id=$request->get('payment_id');
        $user_id=$request->get('user_id');

        $uid=$request->get('uid');
        // return var_dump($pid);
        // return response()->json($pid);

        
        $arr=array();
        $shopee_customer = new Customerdetail([
            'name'=>$name,
            'mobile'=>$mobile,
            'email'=>$email,
            'address'=>$address,
            'city'=>$city,
            'pin'=>$pin,
            'payment_mode'=>$payment_mode,
             'payment_id'=>$payment_id,
             'user_id'=>$user_id,
            
         
        ]);
        $shopee_customer->save();
        $userEmail['to'] = $email;
        // $pdf = PDF::loadView('invoice',compact('data'));
        Mail::send('mail',$arr, function ($message) use ($userEmail) {
            $message->to($userEmail['to'])
                ->subject('Order Placed Successfully!');
                // ->attachData($pdf->output(), 'invoice.pdf');
        });
        echo "Order Placed";
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
        $customerdetail = Customerdetail::where('id',$id)->first();
        return response()->json($customerdetail);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $customerdetail = Customerdetail::where('id',$id)->first();
        return response()->json($customerdetail);
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
        $name=$request->get('name');
        $mobile=$request->get('mobile');
        $email=$request->get('email');
        $address=$request->get('address');
        $city=$request->get('city');
        $pin=$request->get('pin');
     

        $customerup=Customerdetail::find($id);
        $customerup->name=$name;
        $customerup->mobile=$mobile;
        $customerup->email=$email;
        $customerup->address=$address;
        $customerup->city=$city;
        $customerup->pin=$pin;
      
        $customerup->save();
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
        $customerdetail = Customerdetail::find($id);
        $customerdetail->delete();
        return response()->json($customerdetail);
    }
}
