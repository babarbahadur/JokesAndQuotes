import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, Image, ImageBackground, Platform, TouchableOpacity, ScrollView } from 'react-native'
import {SearchBar} from 'react-native-elements';
import { AppHeader, AppLoader } from '../../../components/index'
import { styles } from "./styles"; 

const Jokes = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchedJokes, setSearchedJokes] = useState(['Hello world', 'fhjnsj'])
  const [listVisible, setListVisible] = useState(false)
  const [joke, setJoke] = useState('I hate housework. You make the beds, you do the dishes, and six months later, you have to start all over again.')
  const jokes = [
    "People say that money is not the key to happiness, but I always figured if you have enough money, you can have a key made.",
    "I was born in 1962 … and the room next to me was 1963.",
    "The first time I see a jogger smiling, I’ll consider it.",
    "My best birth control now is just to leave the lights on.",
    "I’ve had so much plastic surgery, when I die, they will donate my body to Tupperware.",
    "A man can sleep around, no questions asked. But if a woman makes 19 or 20 mistakes, she’s a tramp.",
    "I hate housework. You make the beds, you do the dishes, and six months later, you have to start all over again.",
    "My husband killed himself. And it was my fault. We were making love and I took the bag off my head.",
    "When I was born, my mother asked the doctor, “Will she live?” He said, “Only if you take your foot off her throat.”",
    "My earliest childhood memory was watching my parents loosen the wheels on my stroller.",
    "Don’t talk to me about Valentine’s Day. At my age, an affair of the heart is a bypass.",
    "What’s red and shaped like a bucket? A blue bucket painted red.",
    "What did the fish say when he swam into a wall? Dam.",
    "What do you call a totally unimportant elephant? - An Irrelephant",
    "A book fell on my head, I can only blame my shelf.",
    "I was the only Jewish kid in a Catholic neighborhood. They all did Hail Marys, I did Hail Murrays.",
    "You know it’s time to start using mouthwash when your dentist leaves the room and sends in a canary.",
    "Don’t tell your kids you had an easy birth or they won’t respect you. For years I used to wake up my daughter and say, “Melissa, you ripped me to shreds. Now go back to sleep.”",
    "Princess Diana and the Queen are driving down the lane when their car is forced off the road by masked thieves. “Out of the car and hand over your jewels.” After the thieves rob them and steal their car, Diana begins to put her earrings, necklace, and rings back on. “Wherever did you hide those,” demanded the Queen. “Where do you think?” asked Diana. “Pity Margaret wasn’t here,” said the Queen. “We could have saved the Bentley.”",
    "Have you ever tried eating a clock? It's very time consuming!",
    "What did the ocean say to the shore? Nothing, it just waved.",
    "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
    "Why did the fish get bad grades? Because it was below sea level.",
    "I was so ugly that they sent my picture to Ripley’s Believe It or Not and he sent it back and said, “I don’t believe it.”",
    "California is druggy, druggy, druggy. If it is white and it is on the table, they are gonna sniff it. I have a friend who O.D.ed in the beauty shop on dandruff.",
    "The women in California, they get scared. A guy flashes you, they go to the police, “He’s flashing! He’s flashing!” In New York, a guy flashes you, you took your embroidery hoop and played ring toss.",
    "Don’t you hate McDonald’s? I heard you can’t get a job there unless you have a skin condition.",
    "Stevie Wonder, that poor son of a bitch. Who’s going to tell him he’s wearing a macramé plant holder on his head?",
    "When the rabbi said, “Do you take this man,” 14 guys said, “She has.” My husband bought the horseback-riding story, thank God.",
    "Lindsay Lohan said she wouldn’t mind being under oath because she thought Oath was a Norwegian ski instructor.",
    "Elizabeth Taylor is so fat, she puts mayonnaise on aspirin.",
    "If Kate Winslet had dropped a few pounds, the Titanic would never have sunk.",
    "You want to get Cindy Crawford confused? Ask her to spell mom backwards.",
    "I was so flat, I used to put Xs on my chest and write, “You are here.” I wore angora sweaters just so the guys would have something to pet.",
    "I blame myself for David Gest. It was me who told Liza Minnelli to find herself a man who wouldn’t sleep with other women.",
    "The whole Michael Jackson thing was my fault. I told him to date only 28-year-olds. Who knew he would find 20 of them?",
    "I finally found out how priests get holy water. They boil the hell out of it.",
    "And since we’re all adults here, let’s be brutally honest — most babies are not actually attractive. In fact, they’re weird and freakish-looking. A large percentage of them are squinty-eyed and bald and their faces are all mushed together, kind of like Renée Zellweger pushed up against a glass window.",
    "The most beautiful women in the world are always the dumbest. The most beautiful woman in the whole world, Bo Derek … This woman is an idiot. She studies for her Pap test.",
    "I was dating a proctologist with a sense of humor. We’d go out for drinks, he’d go, “Bottoms up.”",
    "I was dating a transvestite, and my mother said, “Marry him, you’ll double your wardrobe.”",
    "I was dating a football player. He was so dumb. The man could not count to 21 unless he was naked.",
    "Did you hear Tom Cruise just had a baby? He was there when it was born … He should have been there when it was conceived.",
    "Not all plastic surgeons are good. My cousin went to one and told him she wanted to turn back the hands of time. Now she has a face that could stop a clock.",
    "Everybody talks about multiple orgasm. Multiple orgasm — I’m lucky if both sides of my toaster pop.",
    "Madonna has just lost 30 pounds — she shaved her legs.",
    "On the Vanna White diet, you only eat what you can spell.",
    "The one thing women do not want to find in their stockings on Christmas morning is their husband.",
    "I got a waterbed, but my husband stocked it with trout.",
    "Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",
    "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
    "I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
    "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
    "I'm so good at sleeping. I can do it with my eyes closed.",
    "My boss told me to have a good day.. so I went home.",
    "Why is Peter Pan always flying? He neverlands.",
    "A woman walks into a library and asked if they had any books about paranoia. The librarian says 'They're right behind you!'",
    "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me.",
    "Why do blind people hate skydiving? It scares the hell out of their dogs.",
    "When you look really closely, all mirrors look like eyeballs.",
    "My friend says to me: 'What rhymes with orange' I said: 'No it doesn't'",
    "What do you call a guy with a rubber toe? Roberto.",
    "What did the pirate say when he turned 80 years old? Aye matey.",
    "My wife told me I had to stop acting like a flamingo. So I had to put my foot down.",
    "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
    "Why did the old man fall in the well? Because he couldn't see that well.",
    "I ate a clock yesterday, it was very time consuming.",
    "Whatdya call a frenchman wearing sandals? Phillipe Phillope.",
    "A blind man walks into a bar. And a table. And a chair.",
    "I know a lot of jokes about unemployed people but none of them work.",
    "What's orange and sounds like a parrot? A carrot.",
    "Did you hear about the italian chef that died? He pasta way.",
    "Why couldn't the bicycle stand up? Because it was two tired!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "My wife accused me of being immature. I told her to get out of my fort.",
    "Where do you find a cow with no legs? Right where you left it.",
    "When a deaf person sees someone yawn do they think it’s a scream?",
    "As I suspected, someone has been adding soil to my garden. The plot thickens.",
    "How do crazy people go through the forest? They take the physco path.",
    "And the lord said unto John, 'Come forth and you will receive eternal life'. John came fifth and won a toaster.",
    "What did the traffic light say to the car? Don’t look! I’m about to change.",
    "I just wrote a book on reverse psychology. Do *not* read it!",
    "What did one hat say to the other? You stay here. I’ll go on ahead.",
    "Why wouldn’t the shrimp share his treasure? Because he was a little shellfish.",
    "Two cows are standing in a field. One cow says 'Did you hear about that outbreak of mad cow disease? It makes cows go completely insane!'. The other cow replies 'Good thing I'm a helicopter'.",
    "What did the left eye say to the right eye? Between you and me, something smells.",
    "What did the father tomato say to the baby tomato whilst on a family walk? Ketchup.",
    "Why is there a fence around a cemetery? People are dying to get in.",
    "Did you hear about the kidnapping in the park? They woke him up.",
    "How does Darth Vader like his toast? On the dark side.",
    "When will the little snake arrive? I don't know but he won't be long...",
    "Why do fish live in salt water? Because pepper makes them sneeze!",
    "What has three letters and starts with gas. A Car.",
    "How do you get an astronaut's baby to sleep? You rocket!",
    "I think i would like a job cleaning mirrors, it's just something I could really see myself doing.",
    "Why did it take so long for the pirates to learn the Alphabet? They got stuck at C.",
    "I took the shell off my racing snail thinking it would make him go faster, if anything it made him more sluggish.",
    "Somebody stole my microsoft office and they're going to pay - you have my Word.",
    "Just remember - you never really completely useless, you can always serve as a bad example.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "What do you call a fake noodle? An Impasta.",
    "Want to hear a joke about paper? Nevermind it's tearable.",
    "I just watched a program about beavers. It was the best dam program I've ever seen.",
    "Why did the coffee file a police report? It got mugged.",
    "Did you hear about the baguette at the zoo? It was bread in captivity.",
    "How does a penguin build it's house? Igloos it together.",
    "What do you call a Mexican who has lost his car? Carlos",
    "Bad puns are how eye roll.",
    "What do you call a can opener that's broken? A Can't opener.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don't skeletons ever go trick or treating? Because they have no body to go with.",
    "What do you call an elephant that doesn't matter? An irrelephant",
    "What do you call cheese that isn't yours? Nacho Cheese.",
    "My friend has designed an invisible aeroplane but I can't see it taking off.",
    "The shovel was a ground-breaking invention.",
    "Son: Dad, did you get a haircut? Dad: No I got them all cut.",
    "Why couldn't the bicycle stand up by itself? It was two tired.",
    "What did the grape do when he got stepped on? He let out a little wine.",
    "Why do scuba divers fall backward out of the boat? Cause if they fell forward they'd still be in the boat.",
    "Why did the pig get hired by the restaurant? He was really good at bacon.",
    "Why do birds fly south for the winter? It's way to far to walk.",
    "How does a train eat? It goes chew chew.",
    "I wouldn't buy anything with velcro. It's a total rip-off.",
    "Don’t trust stairs, they’re always up to something.",
    "Want to hear a joke about construction? I'm still working on it.",
    "I accidentally handed my wife a glue stick instead of a chapstick, she still isn't talking to me.",
    "This graveyard looks overcrowded. People must be dying to get in there.",
    "I built an electric fence around my garden and my neighbour is dead against it.",
    "Whoever stole my antidepressants I hope you are happy now.",
    "Two goldfish are in a tank. One says to the other, 'do you know how to drive this thing?'",
    "What do you call a man with a rubber toe? Roberto.",
    "Son: Dad can you put on my shoes for me? Dad: I'll try but they might not fit!",
    "My wife accused me of having zero empathy. I don't understand how she can feel that way.",
    "What do you call a fat psychic? A four-chin teller.",
    "My wife asked me if 'I was listening to her', strange way to start a conservation.",
    "To the man in the wheelchair that stole my camouflage jacket... You can hide but you can't run.",
    "I thought about going on an all-almond diet. But that's just nuts",
    "Son: Dad can you tell me what a solar eclipse is? Dad: No sun.",
    "Why do you never see elephants hiding in trees? Because they're so good at it.",
    "A furniture store keeps calling me. All I wanted was one night stand.",
    "Why do you never see elephants hiding in trees? Because they're so good at it.",
    "What's brown and sticky? A stick.",
    "Son: Dad, can you put the cat out? Dad: I didn't know it was on fire.",
    "My wife says I only have 2 faults. I don't listen and something else...",
    "My wife told me i need to stop behaving like a flamingo. So I had to put my foot down.",
    "I used to work in a shoe recycling shop. It was sole destroying.",
    "Son: I'll call you later. Dad: Don't call me later, call me Dad.",
    "I like waiters, they bring a lot to the table.",
    "Did I tell you the time I fell in love during a backflip? I was heels over head.",
    "My wife is like a newspaper, a new issue everyday.",
    "I don’t play soccer because I enjoy the sport. I’m just doing it for kicks.",
    "People don’t like having to bend over to get their drinks. We really need to raise the bar.",
    "What do you call a shoe made of a banana? A Slipper.",
    "Wife: Stop being an idiot. Just be yourself. Me: Make your mind up!",
    "My mate says I'm getting fat, but in my defense I've had a lot on my plate recently.",
    "I love jokes about eyes, the cornea the better.",
    "Some mornings I wake up grumpy, on others I let her sleep in.",
    "I'm going to stand outside, so if anyone asks tell them I'm outstanding.",
    "You should always knock on the fridge before opening it just in case there's a salad dressing.",
    "Son: Dad, can you put my shoes on? Dad: No, I don't think they'll fit me.",
    "My wife told me to take the spider out instead of killing him. Went out, had drinks and he's a web designer.",
    "A guy tried to sell me a mirror but I knew it was a scam, I could see right through it.",
    "I was shocked when I found out my toaster wasn't waterproof.",
    "I once ate a dictionary, it gave me thesaurus throat I've ever had.",
    "I would avoid the sushi if I was you, it’s a little fishy.",
    "How many apples grow on a tree? All of them.",
    "My 3 favorite things are eating my family and not using commas.",
    "You know what actually makes me smile? My facial muscles.",
    "I am reading a horror story in Braille. Something bad is going to happen, I can feel it.",
    "I spent $100 on a new belt that didn't even fit, my wife said it was a huge waist.",
    "I hate it when people say age is only a number, age is clearly a word.",
    "Son: Dad, I'm hungry! Dad: Hi Hungry, I'm Dad.",
    "Did you hear about the kidnapping at school? It's fine, he woke up.",
    "I have this strange talent that I can always guess what's inside a wrapped present - It's a gift.",
    "Sundays are always a little sad but, the day before is a sadder day.",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
    "I left my wife because she was obsessed with counting. I wonder what she's up to now?",
    "Singing in the shower is all fun and games until you get shampoo in your mouth. Then it's a soap opera.",
    "I went to the store to pick up 8 cans of Sprite. When I got home I realised I'd only picked 7up.",
    "When is a door not a door? When it’s ajar.",
    "What's blue and smells like red paint? Blue paint.",
    "Why did the lion get lost? Because the jungle is massive.",
    "Two fish are in a tank. One says to the othe fish, do you know how to drive this thing?",
    "I wondered why the ball was getting bigger, and then it hit me.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I purchased a deodorant stick today, instructions say 'remove cap and push up buttom' I can hardly walk but when I fart the room smells lovely.",
    "What is the least spoken language in the world? Sign language.",
    "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.",
    "Today my wife left me because I am insecure. Oh wait! She's back, she went to get coffee.",
    "My wife changed a lot when she went vegan, it's like I never knew herbivore.",
    "A man is washing the car with his son. Son: 'Dad can't you just use a sponge?'",
    "Son: How much do all of our bones weigh? Dad: A Skele-ton.",
    "The rotation of earth really makes my day.",
    "A storm blew away 25% of my roof last night, oof.",
    "To the person who stole my glasses. I will find you, I have contacts.",
    "Son: How do I look? Dad: With your eyes.",
    "I know a lot of jokes about retired people but none of them work.",
    "What's red and bad for your teeth? A brick.",
    "2 years ago my doctor told me I was going deaf, I haven't heard from him since.",
    "Don't trust atoms. They make up everything!",
    "What does cheese say to itself in the mirror? Halloumi.",
    "What did the daughter corn ask the mother corn? Where's popcorn.",
    "What did the stoplight say to the car? Don't look, I'm changing.",
    "What did the tired criminal need? Arrest.",
    "What’s the stupidest animal in the jungle? A polar bear.",
    "Why do cows have hooves instead of feet? They lactose.",
    "As i suspected, someone has been adding soil to my garden. The plot thickens.",
    "Son: There’s something in my eye. Dad: Looks like an eyeball!",
    "After you die what part of your body is the last to stop working? Your pupils, they dilate.",
    "Saturday and Sunday are strong days because the others are just weekdays.",
    "I don't want to brag, I finished the puzzle in a week and it said 2-4 years on the box.",
    "How do you get a farm girl to like you? A tractor.",
    "Dark is spelled with a C not a K because you can't C in the dark.",
    "Did you hear about the guy who cut off the left side of his body? He's all right now.",
    "I was gonna tell a time-traveling joke, but you guys didn’t like it.",
    "I was driving my bread car and it caught alight, now it's toast.",
    "I just swapped our bed for a trampoline, my wife hit the roof.",
    "What lies at the bottom of the ocean and twitches? A nervous wreck.",
    "I’m thinking about removing my spine. I feel like it’s only holding me back.",
    "What's brown and sticky? A stick.",
    "What did the buffalo say to his son leaving to school? Bison.",
    "I had to sell my vacuum cleaner, because it was just collecting dust",
    "Why was the cook arrested? He was caught beating an egg.",
    "You know what the loudest pet you can get is? A trum-pet.",
    "What do you call someone with no body and no nose? Nobody knows.",
    "Based upon my shameful behaviour after drinking, I finally decided to quit drinking altogether. Now I drink alone.",
    "I have a fear of elevators, I'm taking steps to avoid them.",
    "How does a meteorologist go up a mountain? They climate.",
  ]

  useEffect(() => {
    onPressNewJoke()
  }, []);

  useEffect(() => {
    console.log(searchedJokes)
  }, [searchedJokes]);


  const handleQueryChange = text => {
    setSearchText(text);
    if (text.length > 1) {
      setListVisible(true)
      const sortedJokes = jokes.filter((item) => item.includes(text));
      setSearchedJokes(sortedJokes)
    } else {
      setListVisible(false)
      setSearchedJokes()
    }
  };

  const onPressNewJoke = () => {
    const jokesLength = jokes.length
    const index = Math.floor((Math.random() * jokesLength) + 0)
    setJoke(jokes[index])
  }

  const renderJoke = () => {
    return(
      <View>
        <Text style={styles.heading}>Joke</Text>
        <Text style={styles.contentText}>{joke}</Text>
      </View>
    )
  }

  const renderListing = () => {
    return(
      <View>
        <ScrollView>
        {searchedJokes != undefined && searchedJokes.map(joke => 
          <TouchableOpacity style={styles.listView} activeOpacity={0.8} onPress={() => {
            setJoke(joke)
            setListVisible(false)
          }}>
            <Text style={styles.searchedContentText} numberOfLines={1}>{joke}</Text>
          </TouchableOpacity>
        )}
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#00BFA6'} opacity={0.95}/>
      <AppHeader title="Jokes"/>
      <View
        style={{
          borderBottomColor: '#a7a7aa',
          // borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
        <SearchBar
          containerStyle={styles.searchContainerStyle}
          inputContainerStyle={{backgroundColor: '#00BFA6'}}
          inputStyle={{color: '#FFFFFF'}}
          cancelButtonProps={{
            color: '#00BFA6',
          }}
          showCancel={false}
          searchIcon={{color: '#FFFFFF'}}
          placeholderTextColor={'#FFFFFF'}
          placeholder="Type Here..."
          onChangeText={handleQueryChange}
          value={searchText}
          onCancel={() => setListVisible(false)}
          onFocus={handleQueryChange}
          // autoFocus={true}
          platform={Platform.OS}
        />
      </View>
      {listVisible && renderListing()}
      <View style={styles.contentView}>
        {renderJoke()}
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.8} onPress={onPressNewJoke}>
          <Text style={styles.buttonText}>New Joke</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../../assets/images/background.png')} style={styles.backgroundImage} resizeMode='contain'/>
      { props.isLoading && <AppLoader/> }
    </View>
  )
}

export default Jokes;
