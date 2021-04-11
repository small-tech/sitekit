<script>
	import Counter from '$lib/Counter.svelte'
	import Confetti from '$lib/Confetti.svelte'
</script>

<main>
  <img src='/site.js.svg' alt="Site.js Logo" />
  <h1>Hello world!</h1>

  <Confetti />
  <Counter />

  <p><a href='https://github.com/small-tech/sitekit'>This starter template</a> combines <a href='https://sitejs.org'>Site.js</a> and <a href='https://kit.svelte.dev'>SvelteKit</a>.</p>

  <section>
    <h2>Like this? Fund us!</h2>
    <p><a href="https://small-tech.org">Small Technology Foundation</a> is a tiny, independent not-for-profit.</p>
    <p>We exist in part thanks to patronage by people like you. If you share <a href="https://small-tech.org/about#small-technology">our vision</a> and want to support our work, please <a href="https://small-tech.org/fund-us">become a patron or donate to us</a> today and help us continue to exist.</p>
  </section>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    color: #375554;
  }

  img {
    width: 80vmin;
    /* width: 16rem; */
  }

  h1 {
    text-transform: uppercase;
    font-size: 12vmin;
    font-weight: 100;
    line-height: 1.1;
    margin: 1rem auto;
    width: 80vmin;
  }

  p {
    max-width: 80vmin;
    margin: 1rem auto;
    line-height: 1.35;
  }
</style>
