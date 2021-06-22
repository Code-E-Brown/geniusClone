'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Songs', [
      {
        artistId: 1,
        userId: 1,
        title: 'Flashing Lights',
        tagId: 1,
        lyrics: "Flashing lights (lights, lights, lights) Flashing lights(lights, lights, lights) Flashing lights(lights, lights, lights) Flashing lights(lights, lights) She don't believe in shooting stars But she believe in shoes & cars Wood floors in the new apartment Couture from the store's department You more like L'eau de Stardee shit I'm more of the, trips to Florida Order the h'orderves, views of the water Straight from the page of your favorite author And the weather so breezy Man why can't life always be this easy She in the mirror dancing so sleazy",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71+JZba5PuL._AC_UL600_SR600,600_.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=mWtIxc38xNE'
      },
      {
        artistId: 1,
        userId: 1,
        title: 'Through the Wire',
        tagId: 1,
        lyrics: "I drink a Boost for breakfast, an Ensure for dessert Somebody ordered pancakes, I just sip the sizzurp That right there could drive a sane man berserk Not to worry, Mr.H - to - the - Izzo's back to wi-zerk How do you console my mom or give her light support Telling her her son's on life support? And just imagine how my girl feel On the plane, scared as hell that her guy look like Emmett Till She was with me before the deal, she been trying to be mine She a Delta, so she been throwing that Dynasty sign No use in me tryin to be lyin', I been trying to be signed Trying to be a millionaire, how I used two lifelines In the same hospital where Biggie Smalls died The doctor said I had blood clots, but I ain't Jamaican, man Story on MTV and I ain't trying to make a band I swear this right here, history in the making, man What if somebody from the Chi' that was ill got a deal On the hottest rap label around? But he wasn't talking about coke and birds It was more like spoken word Except he's really putting it down? And he explained the story about how blacks came from glory And what we need to do in the game Good dude, bad night, right place, wrong time In the blink of a eye, his whole life changed If you could feel how my face felt, you would know how Mase felt Thank God I ain't too cool for the safe belt! I swear to God driver two wants to sue I got a lawyer for the case to keep what's in my safe safe My dawgs couldn't tell if I Looked like Tom Cruise in Vanilla Sky, it was televised There's been an accident like GEICO They thought I was burnt up like Pepsi did Michael I must got a angel 'Cause look how death missed his ass Unbreakable, what you thought, they'd call me Mr. Glass? Look back on my life like the Ghost of Christmas Past Toys 'R' Us where I used to spend that Christmas cash And I still won't grow up, I'm a grown- ass kid Swear I should be locked up for stupid shit that I d But I'm a champion, so I turned tragedy to trium Make music that's fire, spit my soul through the wi You know what I'm sayi When the doctor told me I had a um, I was goin' to have a plate on my ch I said dog, don't you think didn't you realize I'll never make it on the plane n It's bad enough I got all this jewelry  Can't be serious man",
        imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2019/02/Kanye-West-The-College-Dropout-album-cover-web-optimised-820.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=AE8y25CcE6s&list=PLeO-rHNGADqzCkDOyEUZbJMnuu5s9yIGh&index=19'
      },
      {
        artistId: 1,
        userId: 1,
        title: 'Gone',
        tagId: 1,
        lyrics: "Wished I had told, was the only one (uh-oh) But it's too late, it's too late She's gone You sweat her, and I ain't talkin' 'bout a Coogi You a big L, and I ain't talkin 'bout Cool J See me at the airport, at least twenty Louis Treat me like the Prince and this my sweet brother Numpsay Brother Numpsay! Groupies sound too choosy Take 'em to the show and talk all through the movies Says she want diamonds, I took her to Ruby Tuesdays If we up in Friday's, I still have it my way Too late, we gone, we strivin' home Gone, I ride on chrome It's too late Y'all don't want no prob' from me What you rappers could get is a job from me Maybe you could be my intern, and in turn I'll show you how I cook up summer, in the winter Aaron love the raw dog, when will he learn Caught somethin' on the Usher tour he had to 'Let it Burn' Plus he already got three chil'run Arguin' over babysitters like, 'Bitch, it's yo' turn!' Damn 'Ye, it'd be stupid to ditch you Even your superficial raps is super official Are- are - are - Roc pastel with Gucci on",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61vUslTEbFL._SL1200_.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=TwPCaWQIJME'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
