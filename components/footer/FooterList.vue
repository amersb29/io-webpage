<template>
    <div class="col-md-3 txtWhite">
        <h2 class="h2-footer txtWhite">{{listTitle}}</h2>
        <ul v-if="isUlList" class="lista-footer">
            <li v-for="listItem in listItems" :key="listItem.text" class="contacto">
                <FooterListItem :nuxtLink="true" :text="listItem.text" :to="listItem.to"/>
            </li>
        </ul>

        <FooterListItem v-else 
                    v-for="listItem in listItems" 
                    :key="listItem.text" 
                    :icon="listItem.icon" 
                    :text="listItem.text"
                    :applyPadding="listItem.applyPadding"/>
    </div>
</template>

<script>
import FooterListItem from './FooterListItem'

export default {
    props: {
        listTitle: { type: String, default: '' },
        listItems: { type: Array, default: () => [] },
        isUlList: { type: Boolean, default: false }
    },
    components: {FooterListItem}
}
</script>

<style>
.contacto{
    align-items: center;
    display: flex;
    margin: 0 0 15px;
}
.h2-footer{
    text-align: center;
    padding-left: 40px;
    margin-bottom: 35px;
}
.lista-footer{
    list-style: none;
    font-size: 1em;
    padding-left: 70px;
    text-align: left;
}
.lista-footer a {
    text-decoration: none;
    color: inherit;
}
</style>