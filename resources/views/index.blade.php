@extends('main')

@section('title', config('app.name'))

@section('extra-css')
<link rel="stylesheet" href="{{ asset('css/index.css') }}">
@endsection

@section('content')
<div class="container">
    <div id="video" class="">
        <div id="subsciber" class="">

        </div>
        <div id="publisher" class="">

        </div>
    </div>
</div>
@endsection

@section('extra-js')
<script type="application/javascript" src="{{ asset('js/app.js') }}"></script>
@endsection
