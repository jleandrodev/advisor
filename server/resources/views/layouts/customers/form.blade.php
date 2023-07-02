@csrf

<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Nome<span class="text-danger">*</span></label>
    <div class="col-sm-10">
        <input type="text" id="nome" name="name" required maxlength="255" class="form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">CPF</label>
    <div class="col-sm-10">
        <input type="text" name="cpf" maxlength="14" class="form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Telefone<span
            class="phone text-danger">*</span></label>
    <div class="col-sm-10">
        <input type="text" name="phone" required maxlength="15" class="form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Email</label>
    <div class="col-sm-10">
        <input type="text" id="email" name="email" maxlength="100" class="form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">CEP</label>
    <div class="col-sm-10">
        <input type="text" id="cep" name="cep" maxlength="9" class="cep form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Bairro</label>
    <div class="col-sm-10">
        <input type="text" id="neighborhood" name="neighborhood" maxlength="100" class="form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Endereço</label>
    <div class="col-sm-10">
        <input type="text" name="adress" maxlength="100" class="form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Cidade</label>
    <div class="col-sm-10">
        <input type="text" name="city" maxlength="14" class="form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Estado</label>
    <div class="col-sm-10">
        <input type="text" name="state" maxlength="2" class="form-control" />
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-form-label col-sm-2 required">Observação</label>
    <div class="col-sm-10">
        <textarea type="text" name="notes" class="form-control"></textarea>
    </div>
</div>

<button class="btn btn-primary" name="submit" value="" type="submit">Salvar</button>
