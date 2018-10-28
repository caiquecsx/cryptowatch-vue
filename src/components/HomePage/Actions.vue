<template>
    <div id="actions">
        <button type="button" class="btn btn-success">Buy</button>
        <button type="button" class="btn btn-danger">Sell</button>
    </div>
</template>

<script>
export default {};
</script>

<style>
#actions {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 0 auto;
    height: 0 auto;
}
button{
    width: 120px;
    height: 40px;
    margin: 10px;
}
</style>
