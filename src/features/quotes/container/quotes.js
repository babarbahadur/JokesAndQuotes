import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'
import {SearchBar} from 'react-native-elements';
import { AppHeader, AppLoader } from '../../../components/index'
import { styles } from "./styles"; 

const Quotes = (props) => {
  const [searchText, setSearchText] = useState('');
  const [listVisible, setListVisible] = useState(false)
  const [quote, setQuote] = useState({q: 'Definiteness of purpose is the starting point of all achievement.', a: 'W. Clement Stone' },);
  const [searchedQuote, setSearchedQuote] = useState([{q: 'Definiteness of purpose is the starting point of all achievement.', a: 'W. Clement Stone' }])
  const quotes = [
    {q: "Life isn’t about getting and having, it’s about giving and being.", a: "Kevin Kruse" },
    {q: "Whatever the mind of man can conceive and believe, it can achieve.", a: "Napoleon Hill" },
    {q: "Strive not to be a success, but rather to be of value.", a: "Albert Einstein" },
    {q: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", a: "Robert Frost" },
    {q: "I attribute my success to this: I never gave or took any excuse.", a: "Florence Nightingale" },
    {q: "You miss 100% of the shots you don’t take.", a: "Wayne Gretzky" },
    {q: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", a: "Michael Jordan" },
    {q: "The most difficult thing is the decision to act, the rest is merely tenacity.", a: "Amelia Earhart" },
    {q: "Every strike brings me closer to the next home run.", a: "Babe Ruth" },
    {q: "Definiteness of purpose is the starting point of all achievement.", a: "W. Clement Stone" },
    {q: "We must balance conspicuous consumption with conscious capitalism.", a: "Kevin Kruse" },
    {q: "Life is what happens to you while you’re busy making other plans.", a: "John Lennon" },
    {q: "We become what we think about.", a: "Earl Nightingale" },
    {q: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", a: "Mark Twain" },
    {q: "Life is 10% what happens to me and 90% of how I react to it.", a: "Charles Swindoll" },
    {q: "The most common way people give up their power is by thinking they don’t have any.", a: "Alice Walker" },
    {q: "The mind is everything. What you think you become.", a: "Buddha" },
    {q: "The best time to plant a tree was 20 years ago. The second best time is now.", a: "Chinese Proverb" },
    {q: "An unexamined life is not worth living.", a: "Socrates" },
    {q: "Eighty percent of success is showing up.", a: "Woody Allen" },
    {q: "Your time is limited, so don’t waste it living someone else’s life.", a: "Steve Jobs" },
    {q: "Winning isn’t everything, but wanting to win is.", a: "Vince Lombardi" },
    {q: "I am not a product of my circumstances. I am a product of my decisions.", a: "Stephen Covey" },
    {q: "Every child is an artist.  The problem is how to remain an artist once he grows up.", a: "Pablo Picasso" },
    {q: "You can never cross the ocean until you have the courage to lose sight of the shore.", a: "Christopher Columbus" },
    {q: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", a: "Maya Angelou" },
    {q: "Either you run the day, or the day runs you.", a: "Jim Rohn" },
    {q: "Whether you think you can or you think you can’t, you’re right.", a: "Henry Ford" },
    {q: "The two most important days in your life are the day you are born and the day you find out why.", a: "Mark Twain" },
    {q: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", a: "Johann Wolfgang von Goethe" },
    {q: "The best revenge is massive success.", a: "Frank Sinatra" },
    {q: "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", a: "Zig Ziglar" },
    {q: "Life shrinks or expands in proportion to one’s courage.", a: "Anais Nin" },
    {q: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", a: "Vincent Van Gogh" },
    {q: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", a: "Aristotle" },
    {q: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", a: "Jesus" },
    {q: "The only person you are destined to become is the person you decide to be.", a: "Ralph Waldo Emerson" },
    {q: "Go confidently in the direction of your dreams.  Live the life you have imagined.", a: "Henry David Thoreau" },
    {q: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", a: "Erma Bombeck" },
    {q: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", a: "Booker T. Washington" },
    {q: "Certain things catch your eye, but pursue only those that capture the heart.", a: " Ancient Indian Proverb" },
    {q: "Believe you can and you’re halfway there.", a: "Theodore Roosevelt" },
    {q: "Everything you’ve ever wanted is on the other side of fear.", a: "George Addair" },
    {q: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", a: "Plato" },
    {q: "Teach thy tongue to say, “I do not know,” and thous shalt progress.", a: "Maimonides" },
    {q: "Start where you are. Use what you have.  Do what you can.", a: "Arthur Ashe" },
    {q: "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.", a: "John Lennon" },
    {q: "Fall seven times and stand up eight.", a: "Japanese Proverb" },
    {q: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", a: "Helen Keller" },
    {q: "Everything has beauty, but not everyone can see.", a: "Confucius" },
    {q: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", a: "Anne Frank" },
    {q: "When I let go of what I am, I become what I might be.", a: "Lao Tzu" },
    {q: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", a: "Maya Angelou" },
    {q: "Happiness is not something readymade.  It comes from your own actions.", a: "Dalai Lama" },
    {q: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", a: "Sheryl Sandberg" },
    {q: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", a: "Aristotle" },
    {q: "If the wind will not serve, take to the oars.", a: "Latin Proverb" },
    {q: "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.", a: "Unknown" },
    {q: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", a: "Marie Curie" },
    {q: "Too many of us are not living our dreams because we are living our fears.", a: "Les Brown" },
    {q: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", a: "Joshua J. Marine" },
    {q: "If you want to lift yourself up, lift up someone else.", a: "Booker T. Washington" },
    {q: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", a: "Leonardo da Vinci" },
    {q: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.", a: "Jamie Paolinetti" },
    {q: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.", a: "Erica Jong" },
    {q: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", a: "Bob Dylan" },
    {q: "I didn’t fail the test. I just found 100 ways to do it wrong.", a: "Benjamin Franklin" },
    {q: "In order to succeed, your desire for success should be greater than your fear of failure.", a: "Bill Cosby" },
    {q: "A person who never made a mistake never tried anything new.", a: " Albert Einstein" },
    {q: "The person who says it cannot be done should not interrupt the person who is doing it.", a: "Chinese Proverb" },
    {q: "There are no traffic jams along the extra mile.", a: "Roger Staubach" },
    {q: "It is never too late to be what you might have been.", a: "George Eliot" },
    {q: "You become what you believe.", a: "Oprah Winfrey" },
    {q: "I would rather die of passion than of boredom.", a: "Vincent van Gogh" },
    {q: "A truly rich man is one whose children run into his arms when his hands are empty.", a: "Unknown" },
    {q: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", a: "Ann Landers" },
    {q: "If you want your children to turn out well, spend twice as much time with them, and half as much money.", a: "Abigail Van Buren" },
    {q: "Build your own dreams, or someone else will hire you to build theirs.", a: "Farrah Gray" },
    {q: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.", a: "Jesse Owens" },
    {q: "Education costs money.  But then so does ignorance.", a: "Sir Claus Moser" },
    {q: "I have learned over the years that when one’s mind is made up, this diminishes fear.", a: "Rosa Parks" },
    {q: "It does not matter how slowly you go as long as you do not stop.", a: "Confucius" },
    {q: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", a: "Oprah Winfrey" },
    {q: "Remember that not getting what you want is sometimes a wonderful stroke of luck.", a: "Dalai Lama" },
    {q: "You can’t use up creativity.  The more you use, the more you have.", a: "Maya Angelou" },
    {q: "Dream big and dare to fail.", a: "Norman Vaughan" },
    {q: "Our lives begin to end the day we become silent about things that matter.", a: "Martin Luther King Jr." },
    {q: "Do what you can, where you are, with what you have.", a: "Teddy Roosevelt" },
    {q: "If you do what you’ve always done, you’ll get what you’ve always gotten.", a: "Tony Robbins" },
    {q: "Dreaming, after all, is a form of planning.", a: "Gloria Steinem" },
    {q: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.", a: "Mae Jemison" },
    {q: "You may be disappointed if you fail, but you are doomed if you don’t try.", a: "Beverly Sills" },
    {q: "Remember no one can make you feel inferior without your consent.", a: "Eleanor Roosevelt" },
    {q: "Life is what we make it, always has been, always will be.", a: "Grandma Moses" },
    {q: "The question isn’t who is going to let me; it’s who is going to stop me.", a: "Ayn Rand" },
    {q: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", a: "Henry Ford" },
    {q: "It’s not the years in your life that count. It’s the life in your years.", a: "Abraham Lincoln" },
    {q: "Change your thoughts and you change your world.", a: "Norman Vincent Peale" },
    {q: "Either write something worth reading or do something worth writing.", a: "Benjamin Franklin" },
    {q: "Nothing is impossible, the word itself says, “I’m possible!”", a: "–Audrey Hepburn" },
    {q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
    {q: "If you can dream it, you can achieve it.", a: "Zig Ziglar" },
    {q: "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.", a: "Albert Einstein"},
    {q: "Whoever conquers a free town and does not demolish it commits a great error and may expect to be ruined himself.", a: "Niccolo Machiavelli" },
    {q: "A man can be himself only so long as he is alone, and if he does not love solitude, he will not love freedom, for it is only when he is alone that he is really free.", a: "Arthur Schopenhauer"},
    {q: "We cannot solve our problems with the same thinking we used when we created them.", a: "Albert Einstein"},
    {q: "Few are those who see with their own eyes and feel with their own hearts.", a: "Albert Einstein"},
    {q: "Reality is merely an illusion, albeit a very persistent one.", a: "Albert Einstein"},
    {q: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.", a: "Albert Einstein"},
    {q: "It was the experience of mystery - even if mixed with fear - that engendered religion.", a: "Albert Einstein"},
    {q: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", a: "Confucius"},
    {q: "If you're going through hell, keep going.", a: " Winston Churchill"},
    {q: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.", a: "Lao Tzu"},
    {q: "When you reach the end of your rope, tie a knot in it and hang on.", a: "Franklin D. Roosevelt"},
    {q: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.", a: "Wayne Dyer"},
    {q: "There's a way to do it better - find it.", a: "Thomas A. Edison"},
    {q: "The more man meditates upon good thoughts, the better will be his world and the world at large.", a: "Confucius"},
    {q: "The first question which the priest and the Levite asked was: 'If I stop to help this man, what will happen to me?' But... the good Samaritan reversed the question: 'If I do not stop to help this man, what will happen to him?'", a: "Martin Luther King, Jr."},
    {q: "I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.", a: "Muhammad Ali"},
    {q: "A goal is a dream with a deadline.", a: "Napoleon Hill"},
    {q: "Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it.", a: "Oprah Winfrey"},
    {q: "There is only one corner of the universe you can be certain of improving, and that's your own self.", a: "Aldous Huxley"},
    {q: "You have to learn the rules of the game. And then you have to play better than anyone else.", a: "Unknown"},
    {q: "You can't cross the sea merely by standing and staring at the water.", a: "Rabindranath Tagore"},
    {q: "Perseverance is failing 19 times and succeeding the 20th.", a: "Julie Andrews"},
    {q: "Without hard work, nothing grows but weeds.", a: "Gordon B. Hinckley"},
    {q: "Always continue the climb. It is possible for you to do whatever you choose, if you first get to know who you are and are willing to work with a power that is greater than ourselves to do it.", a: "Ella Wheeler Wilcox"},
    {q: "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.", a: "Bradley Whitford"},
    {q: "Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.", a: "Pauline Kael"},
    {q: "One way to keep momentum going is to have constantly greater goals.", a: "Michael Korda"},
    {q: "In motivating people, you've got to engage their minds and their hearts. I motivate people, I hope, by example - and perhaps by excitement, by having productive ideas to make others feel involved.", a: "Rupert Murdoch"},
    {q: "I was motivated to be different in part because I was different.", a: "Donna Brazile"},
    {q: "Never retreat. Never explain. Get it done and let them howl.", a: "Benjamin Jowett"},
    {q: "Success is the only motivational factor that a boy with character needs.", a: "Woody Hayes"},
    {q: "I started doing motivational tours. I've seen all kinds of people, from the CEOs to the lowest executive, opening up to their fears. We don't introspect as much as we should.", a: "Anupam Kher"},
    {q: "If you're trying to achieve, there will be roadblocks. I've had them; everybody has had them. But obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.", a: "Michael Jordan"},
    {q: "If you don't know where you are going, any road will get you there.", a: "Lewis Carroll"},
    {q: "It's better to be a lion for a day than a sheep all your life.", a: "Elizabeth Kenny"},
    {q: "The only true wisdom is in knowing you know nothing.", a: "Socrates"},
    {q: "Start with what is right rather than what is acceptable.", a: "Franz Kafka"},
    {q: "That old law about 'an eye for an eye' leaves everybody blind. The time is always right to do the right thing.", a: "Martin Luther King, Jr."},
    {q: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.", a: "Confucius"},
    {q: "Adopt the pace of nature: her secret is patience.", a: "Ralph Waldo Emerson"},
    {q: "There are three faithful friends - an old wife, an old dog, and ready money.", a: "Benjamin Franklin"},
    {q: "Nature and books belong to the eyes that see them.", a: "Ralph Waldo Emerson"},
    {q: "In dwelling, live close to the ground. In thinking, keep to the simple. In conflict, be fair and generous. In governing, don't try to control. In work, do what you enjoy. In family life, be completely present.", a: "Lao Tzu"},

  ]

  
  useEffect(() => {
    onPressNewQuote()
  }, []);

  const handleQueryChange = text => {
    setSearchText(text);
    if (text.length > 1) {
      setListVisible(true)
      const sortedQuotes = quotes.filter((item) => item.q.includes(text) || item.a.includes(text));
      setSearchedQuote(sortedQuotes)
    } else {
      setListVisible(false)
      setSearchedQuote()
    }
  };

  const renderJoke = () => {
    return(
      <View>
        <Text style={styles.heading}>Quote</Text>
        <Text style={styles.contentText}>{quote.q}</Text>
        <Text style={styles.authorText}>{quote.a}</Text>
      </View>
    )
  }

  const onPressNewQuote = () => {
    const quotesLength = quotes.length
    const index = Math.floor((Math.random() * quotesLength) + 0)
    console.log(quotes[index])
    setQuote(quotes[index])
    // props.searchQuotes()
  }

  const renderListing = () => {
    return(
      <View>
        <ScrollView>
        {searchedQuote != undefined && searchedQuote.map(quote => 
          <TouchableOpacity style={styles.listView} activeOpacity={0.8} onPress={() => {
            setQuote(quote)
            setListVisible(false)
          }}>
            <Text style={styles.searchedContentText} numberOfLines={1}>{quote.q}</Text>
          </TouchableOpacity>
        )}
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#00BFA6'} opacity={0.95}/>
      <AppHeader title="Quote"/>
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
          // onCancel={() => props.navigation.goBack()}
          // autoFocus={true}
          platform={Platform.OS}
        />
      </View>
      { listVisible && renderListing() }
      <View style={styles.contentView}>
        {!listVisible && renderJoke()}
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.8} onPress={onPressNewQuote}>
          <Text style={styles.buttonText}>New Quote</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../../assets/images/quotes.png')} style={styles.backgroundImage} resizeMode='contain'/>
      { props.isLoading && <AppLoader/> }
    </View>
  )
}

export default Quotes;