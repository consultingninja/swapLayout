<script>
    import {showModal,layout} from '../stores';
</script>

<nav class="nav-base"  class:top={$layout==='top'} class:side={$layout==='side'}>
    <a href="/">Home</a>
    <a href="/two">Page Two</a>
    <button on:click={() => (showModal.set(true))}>
        Change Layout
    </button>
</nav>

<style>
    .nav-base{
        display: flex;
    }
    .top{
        width:100%;
        padding-top: 1em;
        background: linear-gradient(to right, #FF3C00, #242424);
        flex-direction: row;
        justify-content: center;
        border-bottom: 1px solid rgba(122, 117, 117,0.3);
        padding-bottom: 1em;
    }
    .side{
        height:100vh;
        padding-right: 1em;
        flex-direction: column;
        justify-content: center;
        background: linear-gradient(to bottom, #FF3C00, #242424);
        border-right: 1px solid rgba(122, 117, 117,0.3);


    }
    .side a{
        color:#FFF;
        text-decoration: none;
        margin-bottom: 1em;
        font-size: larger;
    }

    button{
        color:#FFF;
        margin-left: 1em;
        background-color: rgba(122, 117, 117,0.0);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    }
    button:hover{
        cursor: pointer;
        opacity: .8;
        box-shadow: inset 2px #242424;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    }
    a{
        color:#FFF;
        text-decoration: none;
        margin-left: 1em;
        font-size: larger;
    }
    a:hover{
        opacity: .5;
        border-bottom: 2px solid #FFF;
    }
</style>