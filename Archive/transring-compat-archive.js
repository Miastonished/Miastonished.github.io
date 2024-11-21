// ORIGINAL SCRIPT LOCATION https://transring.neocities.org/ring.js
// Copied and modified to work with my new url


// based off https://webcatz.neocities.org/resources/webstring/
transring = {}

// sitelist (newest to oldest)
// strip the https:// off
transring.sites = [
  "nepetaquest.nekoweb.org",
  "www.rosebyte.xyz",
  "adilene.net",
  "ivycryptid.nekoweb.org",
  "bride2be.neocities.org",
  "e10.neocities.org",
  "alcatrazisland.neocities.org",
  "aetherie-99.neocities.org",
  "eringrimalkin.neocities.org",
  "mortland.neocities.org",
  "mintchipdotcom.neocities.org",
  "cake.moe",
  "sillyhearts.neocities.org",
  "bscit.dev",
  "ultrakill.nekoweb.org",
  "chimerathing.neocities.org",
  "catatonia.neocities.org",
  "b1ttersw33t.neocities.org",
  "stars-sys.neocities.org",
  "remnantmaru.neocities.org",
  "matriel.neocities.org",
  "mettatons-fan-corner.neocities.org",
  "postalbutch.neocities.org",
  "illomen.neocities.org",
  "rainparade.nekoweb.org",
  "bramblingaround.neocities.org",
  "columbiasthoughts.neocities.org",
  "freakysunshine.neocities.org",
  "alyxia.dev",
  "sugrstrz.com",
  "acidicalchemist.neocities.org",
  "weatherchannel.neocities.org",
  "mothmothmothmoth.neocities.org",
  "leamsiwl.nekoweb.org",
  "asterhalloween.neocities.org",
  "analoguecatalogue.neocities.org",
  "morganacore.neocities.org",
  "sorrowshowers.neocities.org",
  "stelfield.neocities.org",
  "sepharia.neocities.org",
  "sleepycircus.neocities.org",
  "aestuarium.me",
  "asmodeusvulcan.neocities.org",
  "ender-the-phantom.neocities.org",
  "multicolor-anarchist.neocities.org",
  "beaus-silly-folder.nekoweb.org",
  "ivyswell-tavern.neocities.org",
  "tilde-os.neocities.org",
  "din0r4wr.neocities.org",
  "astracelestine.nekoweb.org",
  "rockseize.neocities.org",
  "breaker-one.neocities.org",
  "oceansandy02.neocities.org",
  "rawrware.neocities.org",
  "octopen.neocities.org",
  "lupinus.neocities.org",
  "terrorbabs.neocities.org",
  "zenithtrajectory.neocities.org",
  "usprisoner.neocities.org",
  "pentumbra.neocities.org",
  "twitch.cymru",
  "scenemime.neocities.org",
  "chromaeleon.neocities.org",
  "mossypawprints.neocities.org",
  "columbidaes.neocities.org",
  "hammerheader.neocities.org",
  "simpolomeo.neocities.org",
  "p1n4.neocities.org",
  "felixtheghost.neocities.org",
  "bushdoctor.neocities.org",
  "cresentri.com",
  "wallgof.neocities.org",
  "kitnomaly.neocities.org",
  "sunkissed-feathers.neocities.org",
  "t-hates-you.neocities.org",
  "iodatalog.neocities.org",
  "disasterpiece.neocities.org",
  "its-em.neocities.org",
  "dragonworld.neocities.org",
  "moonlitautumn.github.io/webbb/",
  "traversetown.neocities.org",
  "wriorango.neocities.org",
  "gh0sted.neocities.org",
  "dqs114.neocities.org",
  "serasworld.neocities.org",
  "starhaven.neocities.org",
  "nickolox.com",
  "darlingfawn.neocities.org",
  "herebedraconity.neocities.org",
  "crowsite.neocities.org",
  "euclids-exception.neocities.org",
  "wrldrevolving.neocities.org",
  "strawberryysnow.neocities.org",
  "thecatingrey.neocities.org",
  "novaverie.neocities.org",
  "june-is-scared.nekoweb.org",
  "skyedarkclaw.neocities.org",
  "toriii.neocities.org",
  "ephemeralstar.neocities.org",
  "cybr.gay",
  "ghostsalt.neocities.org",
  "thievery.neocities.org",
  "kasperspace.nekoweb.org",
  "pastaaa1.neocities.org",
  "kaymartz.neocities.org",
  "mothwiingz.neocities.org",
  "v1v1sect1on.neocities.org",
  "amethystweb.nekoweb.org",
  "rachelowens.co.uk",
  "cicadastatic.neocities.org",
  "pysgodyn3.neocities.org",
  "ques-nook.neocities.org",
  "vampfag.top",
  "candybaroque.neocities.org",
  "quesadillawizard.neocities.org",
  "silas-hw.github.io",
  "firefairy.neocities.org",
  "noisecorvid.neocities.org",
  "digitaldaydreams.neocities.org",
  "cassiecandles.net",
  "mxbo.neocities.org",
  "virtually-isolated.neocities.org",
  "anomalous.monster",
  "bonbon-ufo.neocities.org",
  "ibbofazblog.neocities.org",
  "miniwildpanda.neocities.org",
  "tvkid.online",
  "koyanthrope.neocities.org",
  "livormortis.neocities.org",
  "zelltronic.neocities.org",
  "goosetank.neocities.org",
  "butchboothill.neocities.org",
  "lopster.neocities.org",
  "angelwood.xyz",
  "spycicl.neocities.org",
  "shuriee.neocities.org",
  "sticktrix.neocities.org",
  "mannequin.fun",
  "blue-miaou.neocities.org",
  "transferns.neocities.org",
  "germpills.neocities.org",
  "atarax.neocities.org",
  "lifelesscold.neocities.org",
  "raum.neocities.org",
  "goleihm.neocities.org",
  "fuzzybabycrow.neocities.org",
  "kidwiththechemicalz.neocities.org",
  "testtubesterone.nekoweb.org",
  "cayway.neocities.org",
  "old.fluffpumpkin.net",
  "westwinddogs.cc",
  "ikuda.net",
  "home.illuc.xyz",
  "kakotheris.nekoweb.org",
  "shadowfae.neocities.org",
  "starlitseas.neocities.org",
  "wolfdeer.neocities.org",
  "fromthebog.neocities.org",
  "bohwoah.neocities.org",
  "pixelatedpeachjuice.neocities.org",
  "atomixe.neocities.org",
  "slushiecafe.neocities.org",
  "sea-of-colors.neocities.org",
  "cyrussoleil.neocities.org",
  "zombi.neocities.org",
  "confetticake.neocities.org",
  "dni.lol",
  "onetimeoccam.com",
  "anon1mity.neocities.org",
  "lesrallizes.neocities.org",
  "robynnesnest.click",
  "freakygabry.neocities.org",
  "alphacentauri.neocities.org",
  "haetae.pages.gay",
  "mooface.neocities.org",
  "msx.gay",
  "draggianuniverse.neocities.org",
  "sepulchredsacrament.neocities.org",
  "spacemadness.neocities.org",
  "datoxicwaltz.neocities.org",
  "canidae-council.neocities.org",
  "cannibalpilled.neocities.org",
  "bloodthirstymasquerade.neocities.org",
  "pawpyrus.neocities.org",
  "muffinzhouze.neocities.org",
  "realismomagico.nekoweb.org",
  "themightyloser.nekoweb.org",
  "sealzie.neocities.org",
  "sillywilly22.neocities.org",
  "basi.nya.pub",
  "daisywhisp.neocities.org",
  "ray0fsunsh1ne.neocities.org",
  "st4rguy.neocities.org",
  "subterraneanhomesickalien.neocities.org",
  "sunny-cities.neocities.org",
  "suprsaturatd.neocities.org",
  "lucienzeal.neocities.org",
  "interstellarsystem.neocities.org",
  "sociallyhazardous.neocities.org",
  "mldkyt.nekoweb.org",
  "thespaceshanty.neocities.org",
  "mermora.neocities.org",
  "leyy.neocities.org",
  "disuko.neocities.org",
  "whit.moe",
  "im-disco-baby.neocities.org",
  "digital-goddess.nekoweb.org",
  "raven-files.neocities.org",
  "bugkisser.neocities.org",
  "chimeramanticore.neocities.org",
  "mism4tchedsocks.neocities.org",
  "jackdoesntsmileback.neocities.org",
  "kepler-16b.neocities.org",
  "treefungusxx.neocities.org",
  "macabreexude.neocities.org",
  "selkiehimbo.neocities.org",
  "norisowl.neocities.org",
  "mametzwood.neocities.org",
  "dupersuperholly.neocities.org",
  "ashtonsivibing.neocities.org",
  "turbuggy.neocities.org",
  "magicaldoll.neocities.org",
  "boatemhq.neocities.org",
  "olliveen.neocities.org",
  "glamourbeast.neocities.org",
  "digitalcat.neocities.org",
  "caesthoffe.neocities.org",
  "deletys.neocities.org",
  "unsungstorywiki.neocities.org",
  "granolaria.neocities.org",
  "wumsley.neocities.org",
  "madeinv.love",
  "moonlightmyopia.neocities.org",
  "gammagoop.neocities.org",
  "koy.fish",
  "halcybutton.neocities.org",
  "betazz.neocities.org",
  "infinitebearr.neocities.org",
  "all-seeing-bunny.neocities.org",
  "halcantdothat.neocities.org",
  "zoneoffun.neocities.org",
  "melancholic-entrails.neocities.org",
  "lilithdev.neocities.org",
  "wolfsite.neocities.org",
  "alienyuri.neocities.org",
  "unit00.neocities.org",
  "voxel.gay",
  "catgirlcassie.neocities.org",
  "atari404.neocities.org",
  "rosrets.neocities.org",
  "miastonished.github.io",
  "lilly.nekoweb.org",
  "cupcakesthebulldog.neocities.org",
  "joolianjay.neocities.org",
  "clowdywings.neocities.org",
  "muttthecowcat.neocities.org",
  "xxfizzybloodxx.neocities.org",
  "slysable.neocities.org",
  "theevergreengardens.neocities.org",
  "achromatic-azurevizor.neocities.org",
  "syrupnx.space",
  "revived.neocities.org",
  "sammylux.neocities.org",
  "lambbones.neocities.org",
  "hymnforascarecrow.neocities.org",
  "fem.nz",
  "subspaceember.neocities.org",
  "shattered-glass.neocities.org",
  "chaoticdreamz.neocities.org",
  "melxncholyman.neocities.org",
  "pastellerie.neocities.org",
  "magooka.neocities.org",
  "celli.neocities.org",
  "squidcrusher.neocities.org",
  "sabrin.party",
  "priro.pro",
  "1dkreally.neocities.org",
  "oliscrabwife.neocities.org",
  "harvest-home.neocities.org",
  "droptherapy.neocities.org",
  "spiderlily.neocities.org",
  "ashhmillr.neocities.org",
  "coffinthusiast.neocities.org",
  "buntsukim.neocities.org",
  "www.cryptie.dev",
  "thekirbysphere.neocities.org",
  "leskowitz.neocities.org",
  "milkyway.moe",
  "zj.neocities.org",
  "tehuan.neocities.org",
  "murderscene.neocities.org",
  "prophetesque.gay",
  "kyoofyardale.neocities.org",
  "bundleofstyx.neocities.org",
  "lavender-cowboy.neocities.org",
  "dog-brain.neocities.org",
  "pixelglade.net",
  "jettsecret.neocities.org",
  "caitsith.neocities.org",
  "moonsidedreams.neocities.org",
  "mspaintdemon.neocities.org",
  "codecreature.neocities.org",
  "thesomnus.neocities.org",
// 	"funnyorangecat-dotcom.neocities.org",
  "girlfailure.neocities.org",
  "sunmiflowers.com",
  "trashcannt.neocities.org",
  "themby.neocities.org",
  "garudyne.neocities.org",
  "doumeli.neocities.org",
  "siph.neocities.org",
  "bubshub.neocities.org",
  "g0reh0und.neocities.org",
  "phoebe.digital",
  "taenicauda.neocities.org",
  "gaycomputerdog.neocities.org",
  "frognet.neocities.org",
  "nonkiru.art",
  "finn-all-uh.org",
  "florpzgalaxy.neocities.org",
  "wonderscape.neocities.org",
  "www.lexiqqq.com",
  "dulcesilly.neocities.org",
  "chocolaterevel.neocities.org",
  "savior-god.neocities.org",
  "infini.neocities.org",
  "manyface.neocities.org",
  "plourples.com",
  "this.squirrel.rocks",
  "lucard.neocities.org",
  "s1nez.nekoweb.org",
  "monsterboy.neocities.org",
  "sizztuna.neocities.org",
  "aceynk.neocities.org",
  "mordecaialba.com",
  "canadiancoded.neocities.org",
  "morethanyoubelieve.neocities.org",
  "foggybear42.neocities.org",
  "117.zone",
  "scottisite.neocities.org",
  "minozomi.neocities.org",
  "digibun.neocities.org",
  "butch-barks.neocities.org",
  "nerucom.neocities.org",
  "smellybead.neocities.org",
  "preservedfigs.uk",
  "anchorgutz.neocities.org",
  "foxthing.neocities.org",
  "klomfel.neocities.org",
  "wrender.neocities.org",
// 	"milosinternetdiary.neocities.org",
  "cherylcherylcheryl.neocities.org",
  "shenaniganery.neocities.org",
  "jens-world-of-hyperfixation.neocities.org",
  "aribluejeans.neocities.org",
  "write-on.org",
  "asralore.neocities.org",
  "snowyfin.neocities.org",
  "tertiaryapocalypse.neocities.org",
  "killing-machine.neocities.org",
  "spacemonkeyz.neocities.org",
  "freaksaint.neocities.org",
  "ghost-game.neocities.org",
  "colortraks.net",
  "screamingegg.neocities.org",
  "jayspace.neocities.org",
  "phantomrats.neocities.org",
  "jennydxxth.neocities.org",
  "sech1p.ovh",
  "wappydog.neocities.org",
  "leizy8499.neocities.org",
  "fearofmusic.neocities.org",
  "serenegecko.neocities.org",
  "slasherboy.neocities.org",
  "www.riveroysters.net",
  "f3r4l-c4tg1rl.neocities.org",
  "asteromorph.neocities.org",
  "realgaudin.uk",
// 	"s1llyguy.neocities.org",
  "itpuddle.com",
// 	"neotrinity.xyz",
// 	"zonks27.neocities.org",
  "cadeion.neocities.org",
  "corvidae.digital",
  "catboo.neocities.org",
  "ttaxyy.neocities.org",
//  "gyrobreaka.neocities.org",
  "zinesbylennon.neocities.org",
  "poetofu.neocities.org",
  "ilovebeingtrans.neocities.org",
  "spettri.neocities.org",
  "whirlwind.neocities.org",
  "stric9l0l.neocities.org",
  "swiftyshq.neocities.org",
  "crystal.tilde.institute",
  "isactuallyabear.neocities.org",
  "statusq.cc",
  "astralvrz.github.io",
  "dogspit.nekoweb.org",
  "flower-killer.neocities.org",
  "phrogee.neocities.org",
  "burialcloth.neocities.org",
  "maxxywaxxy.neocities.org",
  "orion-overdrive.neocities.org",
  "fangzzz.neocities.org",
  "aryllsappreciations.neocities.org",
  "twansgendew.net",
  "jubiland.neocities.org",
  "cyberdemon.neocities.org",
  "space-bar.neocities.org",
// 	"bunnieforie.neocities.org",
// 	"hadalzone.neocities.org",
  "pinkvampyr.leprd.space",
  "thecorvidking.neocities.org",
  "confettiguts.gay",
  "callmecannibal.neocities.org",
//  "nasunikki.neocities.org",
  "shinyexe.neocities.org",
  "smokoswebzone.gay",
  "kelpeater.neocities.org",
  "deviltown.neocities.org",
  "r-temisia.neocities.org",
  "crashtestdummy.neocities.org",
  "punkwasp.leprd.space",
  "nyacat.moe",
  "theabsoluterealm.com",
  "layercake.neocities.org",
//  "juicemachine.neocities.org",
  "predictable1993.neocities.org",
  "item64.neocities.org",
  "vurrsys.neocities.org",
  "cvnnbl.neocities.org",
//  "squeezeoats.neocities.org",
  "icosahedr.online",
  "theaio.neocities.org",
  "qso404.neocities.org",
  "nimravidae.neocities.org",
  "mizuki.world",
//  "milestailsprower.neocities.org",
  "foolsparadise.neocities.org",
  "redrevelry.neocities.org",
  "drakonic.zone",
  "onlywonder.net",
  "heck.computer",
  "diluculo.neocities.org",
  "glassyhouse.neocities.org",
  "purplehello98.neocities.org",
  "causeistayedaway.neocities.org",
  "rockinroller.neocities.org",
  "cranknet.com",
  "p3p.neocities.org",
  "hunipyon.neocities.org",
  "beebfreeb.neocities.org",
  "laikacore.neocities.org",
  "the-bat-house.neocities.org",
//  "least-mouse.github.io",
  "faeriebottled97.neocities.org",
  "worldsaddress.neocities.org",
  "thoughts-and-collections.neocities.org",
  "shiroganes.neocities.org",
  "webcatz.neocities.org",
  "out.neocities.org",
  "mysweetpiano.neocities.org",
  "mikaorangeart.neocities.org",
  "galactixstar.neocities.org",
  "cyberneticdryad.neocities.org",
  "bajablasphemy.neocities.org",
  "blagi.neocities.org",
  "sanguinariacanadensis.neocities.org",
//  "mincerafter42.github.io",
  "transrats.neocities.org",
  "friday-girl.neocities.org",
  "flutteristhebest.neocities.org",
  "sunnyday.neocities.org",
  "sleepy-sage.neocities.org",
  "wolf-on-the-web.neocities.org",
  "alan460.neocities.org",
  "mothcore.neocities.org",
  "keysklubhouse.com",
  "macaque.moe",
  "rh0mbus0fruin.neocities.org",
  "scourgescloset.neocities.org",
  "troy-sucks.neocities.org",
  "transring.neocities.org",
];


transring.idx = 250

if (transring.idx === -1) document.currentScript.outerHTML = `<div>
    <a href="https://transring.neocities.org" target="_top"><img src="https://transring.neocities.org/widget/trans/button.png"></a>
    <div style="font-size: 0.75em; text-align: center">(this site isn't part of the webring... yet!)</div>
  </div>`;

else {
  let widget = document.currentScript.dataset.widget ?? "trans";
  let next = "https://" + transring.sites[(transring.idx + 1) % transring.sites.length];
  let prev = "https://" + transring.sites.at(transring.idx - 1);
  
  if (widget === "cloud") document.currentScript.outerHTML = `
    <div id="transring" style="display: flex; justify-content: center; align-items: center; gap: 4px; image-rendering: pixelated">
      <a href="${prev}" target="_top">
        <img src="https://transring.neocities.org/widget/cloud/left.png" alt="previous site">
      </a>
      <a href="https://transring.neocities.org" target="_top">
        <img src="https://transring.neocities.org/widget/cloud/button.png" alt="transing the internet">
      </a>
      <a href="${next}" target="_top">
        <img src="https://transring.neocities.org/widget/cloud/right.png" alt="next site">
      </a>
    </div>
  `;
  
  else document.currentScript.outerHTML = `
    <div id="transring" style="display: flex; align-items: center; gap: 3.278%; max-width: 244px; image-rendering: pixelated">
      <a href="${prev}" target="_top" style="width: 12.295%">
        <img width="100%" src="https://transring.neocities.org/widget/${widget}/left.png" alt="previous site">
      </a>
      <a href="https://transring.neocities.org" target="_top" style="width: 68.852%">
        <img width="100%" src="https://transring.neocities.org/widget/${widget}/button.png" alt="transing the internet">
      </a>
      <a href="${next}" target="_top" style="width: 12.295%">
        <img width="100%" src="https://transring.neocities.org/widget/${widget}/right.png" alt="next site">
      </a>
    </div>
  `;
}


delete transring;