<script>
export default {
    methods: {
        printToastMsg(texto, icono) {
            const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
            })

            toast.fire(texto, '', icono)
        }
    }
}
</script>

<style>

</style>