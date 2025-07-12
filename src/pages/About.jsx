import FeaturesPending from './../components/Plans'

const About = () => {

  return (
    <div className="max-w-4xl bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-lg text-gray-800 font-sans !mt-8 !mx-auto flex flex-col  !gap-5 !p-5">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
        Not sure how to use this section.
      </h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-md mb-8">
        <p className="text-sm text-gray-700 font-medium">
          <span className="font-semibold">TL;DR:</span> What started as a simple
          weekend project turned into something more meaningful.
        </p>
      </div>

      <div className="space-y-6 leading-relaxed text-lg">
        <p>
          This all began as a small experiment—just something to tinker with
          over the weekend. I had no big goals, no roadmap. I simply wanted to
          create. A game, a mechanic, a feeling—anything that sparked joy in the
          process.
        </p>

        <p>
          But slowly, as the sand settled in the hourglass, I realized I was&#39;nt
          just dabbling. I was showing up. Again and again. Weekends became
          sacred time for building—tiny games, little prototypes, playful ideas
          brought to life.
        </p>

        <p>
          Now, it&#39;s become a quiet personal challenge: how many games can I make
          over weekends alone? Some are weird. Some are rough. A few are
          surprisingly delightful. All of them are honest.
        </p>

        <p>
          This project isn&#39;t about perfection. It&#39;s about momentum. About
          finishing small things. About joy. And maybe, a bit of therapy too. It
          helps me stay connected—to curiosity, creativity, and that part of
          myself that just loves to make things.
        </p>

        <p>
          So if you found yourself here, now you know: this is my sandbox. A
          growing archive of imperfect, heartfelt weekend games. Built slowly.
          With care. For no reason other than the fact that I really, really
          love pressing &quot;start.&quot;
        </p>
      </div>

       <div className="bg-blue-100 border-l-4 border-gray-400 p-4 rounded-md mb-8 !pl-5">
        <p className="text-sm text-gray-700 font-regular">
          <span className="font-semibold">TL;DR:</span> YES, Above content is AI generated, but that&#39;s the gist of it
        </p>
      </div>

      <FeaturesPending></FeaturesPending>
    </div>
  );
};

export default About;
