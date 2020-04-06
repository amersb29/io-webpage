<template>
    <div class="col-md-3 txtWhite">
        <h2 class="h2-footer txtWhite">{{listTitle}}</h2>
        <ul class="lista-footer">
            <li v-for="listItem in listItems" :key="listItem.text" class="contacto">
                <FooterListItem 
                    :icon="listItem.icon" 
                    :text="listItem.text"
                    :applyPadding="listItem.applyPadding" 
                    :to="listItem.to"
                    :href="listItem.href"
                    />
            </li>
        </ul>
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
.contacto {
    align-items: center;
    display: flex;
    min-height: 39px;
}
.h2-footer {
    text-align: center;
    margin-bottom: 35px;
}
.lista-footer {
    list-style: none;
    font-size: 1em;
    padding: 0;
    text-align: left;
    width: fit-content;
    margin: 0 auto;
}
.lista-footer a {
    text-decoration: none;
    color: inherit;
    padding: 0;
}
</style>