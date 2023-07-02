@extends('layouts.app')

@section('title')
    <h1>Lista de Clientes</h1>
@endsection

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a class="text-decoration-none" href="{{ route('home') }}">Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a class="text-decoration-none" href="{{ route('customers.index') }}">Lista de Clientes</a>
    </li>
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Lista de Clientes</h3>
                        <div class="card-tools">
                            <a href="{{ route('customers.create') }}" class="btn btn-primary">Novo</a>
                        </div>
                    </div>

                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Número</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($customers as $customer)
                                    <tr>
                                        <td>{{ $customer->id }}</td>
                                        <td>{{ $customer->name }}</td>
                                        <td>{{ $customer->phone }}</td>
                                        <td>
                                            <a href="" class="btn btn-primary">Editar</a>
                                            <a href="" class="btn btn-danger">Deletar</a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer clearfix">
                        <div class="pagination float-right">
                            {{ $customers->links('vendor.pagination.custom-pagination') }}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
