
<script>
	import Modal from '$lib/Modal.svelte';
    import Navbar from "$lib/Navbar.svelte";
    import {layout, carousel,hero,message} from '../stores';

    let layoutForm ;
    function handleFormChange(){
        layout.set(layoutForm.layout.value);
    }

    let thisMessage ;

    $:{ if($message !== thisMessage && thisMessage !== undefined) message.set(thisMessage)
    }
    if($message) thisMessage = $message;

</script>

<div class='main-app' class:top={$layout==='top'} class:side={$layout==='side'}>
    <Navbar/>

    <div class="main-content">
        {#if $message}
        <h2 class="message">{$message}</h2>
        {/if}
        <slot>
        </slot>
    </div>

</div>

<Modal>
	<h2 slot="header">
		Layout Options
	</h2>

    <form bind:this={layoutForm} on:change={handleFormChange}>
        <label for="layout">Navigation Location</label>
        <select name="layout" value={$layout}>
            <option value="top">Top</option>
            <option value="side">Side</option>
        </select>
        <hr />
        <div class="layout-option">
            <label for="carousel">Carousel</label>
            <input type="checkbox" name="carousel" value="carousel" on:change={()=> carousel.set(!$carousel)} checked={$carousel} />

        </div>
        <div class="layout-option">
            <label for="hero">Hero</label>
            <input type="checkbox" name="hero" value="hero" on:change={()=> hero.set(!$hero)} checked={$hero} />
        </div>
        <div class="layout-option">
            <div>
                <label for="message">Custom Message</label>
            </div>

            <textarea type="textarea" cols={20} name="message" bind:value={thisMessage} />
        </div>

    </form>

</Modal>


<style>
    .main-app{
        margin: 0;
        background-color: #242424;
        color: #FFF;
        display: flex;

    }
    .top{
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        align-items: center;

    }
    .side{
        height: 100vh;
        flex-direction: row;
        align-items: flex-start;

    }
    .main-content{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    select{
        width: 100%;
    }
    .layout-option{
        margin-bottom:.5em;
    }

</style>