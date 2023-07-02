@extends('layouts.app')

@section('title')
    <h1>Visualização de Cliente</h1>
@endsection
@section('breadcrumb')
    <li class="breadcrumb-item">
        <a class="text-decoration-none" href="{{ route('home') }}">Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a class="text-decoration-none" href="{{ route('customers.index') }}">Clientes</a>
    </li>
    <li class="breadcrumb-item">
        <a class="text-decoration-none" href="{{ route('customers.index') }}/">Cliente</a>
    </li>
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Cliente</h3>
                        <div class="card-tools">
                            <a href="#" class="btn btn-danger mx-2">Deletar</a>
                        </div>
                        <div class="card-tools">
                            <a href="#" class="btn btn-primary mx-2">Editar</a>
                        </div>
                    </div>
                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
