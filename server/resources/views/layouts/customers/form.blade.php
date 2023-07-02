@csrf

<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Nome<span class="text-danger">*</span></label>
    <div class="col-sm-10">
        @error('name')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" id="name" name="name" maxlength="255"
            class="form-control @error('name') is-invalid @enderror" value="{{ old('name') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">CPF</label>
    <div class="col-sm-10">
        @error('cpf')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" name="cpf" maxlength="14" class="form-control @error('cpf') is-invalid @enderror"
            value="{{ old('cpf') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Telefone<span
            class="phone text-danger">*</span></label>
    <div class="col-sm-10">
        @error('phone')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" name="phone" maxlength="15" class="form-control @error('phone') is-invalid @enderror"
            value="{{ old('phone') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Email</label>
    <div class="col-sm-10">
        @error('email')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" id="email" name="email" maxlength="100"
            class="form-control @error('email') is-invalid @enderror" value="{{ old('email') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">CEP</label>
    <div class="col-sm-10">
        @error('cep')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" id="cep" name="cep" maxlength="9"
            class="cep form-control @error('cep') is-invalid @enderror" value="{{ old('cep') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Bairro</label>
    <div class="col-sm-10">
        @error('neighborhood')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" id="neighborhood" name="neighborhood" maxlength="100"
            class="form-control @error('neighborhood') is-invalid @enderror" value="{{ old('neighborhood') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Endereço</label>
    <div class="col-sm-10">
        @error('adress')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" name="adress" maxlength="100" class="form-control @error('adress') is-invalid @enderror"
            value="{{ old('adress') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Número</label>
    <div class="col-sm-10">
        @error('adress')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="number" name="number" maxlength="100" class="form-control @error('number') is-invalid @enderror"
            value="{{ old('number') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Cidade</label>
    <div class="col-sm-10">
        @error('city')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" name="city" maxlength="14" class="form-control @error('city') is-invalid @enderror"
            value="{{ old('city') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Estado</label>
    <div class="col-sm-10">
        @error('state')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input type="text" name="state" maxlength="2"
            class="form-control @error('state') is-invalid @enderror" value="{{ old('state') }}" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Observação</label>
    <div class="col-sm-10">
        @error('notes')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <textarea type="text" name="notes" class="form-control @error('notes') is-invalid @enderror"
            value="{{ old('notes') }}"></textarea>
    </div>
</div>

<button class="btn btn-primary" name="submit" value="" type="submit">Salvar</button>
