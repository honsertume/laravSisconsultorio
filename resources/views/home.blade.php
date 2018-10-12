@extends('layouts.master')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h1>Componente: </h1>
            <app-component></app-component>
            <h1>Router view:</h1>
            <router-view></router-view>
        </div>
    </div>
</div>
@endsection
