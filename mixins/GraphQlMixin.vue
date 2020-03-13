<script>
export default {
    methods: {
        async executeMutation(mutation, variables) {
            const op = await this.$apollo.mutate({
                mutation,
                variables
                })

            return op.data.res
        },
    }
}
</script>