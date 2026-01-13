"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

const blogPosts = [
    { id: 1, title: "5 Signs Your Dealership Culture Needs a Reset", excerpt: "A dealership's success doesn't just come down to car sales, marketing budgets, or the number of leads in your CRM. Culture—the invisible engine behind your people—can either drive you forward or stall your momentum.", category: "Culture", readTime: "4 min read", content: `A dealership's success doesn't just come down to car sales, marketing budgets, or the number of leads in your CRM. Culture—the invisible engine behind your people—can either drive you forward or stall your momentum.

Here are five clear signs your dealership culture needs a reset:

**High Turnover Rates**
When employees constantly come and go, it's not just about money. It's about how they feel when they walk in the door. A toxic or disconnected culture pushes people away, regardless of pay.

**Low Energy in Sales Meetings**
If your meetings feel like a drain rather than a rally, your leadership tone might be off. Glenn Lundy teaches dealership leaders how to shift the energy by resetting expectations, vision, and consistency.

**Lack of Accountability**
Culture thrives on clarity. If no one knows what "winning" looks like, they'll play their own game—or none at all. Strong leadership creates systems that reward performance and encourage responsibility.

**Minimal Team Camaraderie**
Do your salespeople support each other—or compete at the expense of the team? A healthy dealership culture values collaboration just as much as individual success.

**Flat Sales Despite High Traffic**
If your store gets leads but conversions are low, culture might be the problem. A disengaged team will rarely deliver high performance, no matter how full the pipeline is.

At 800% Elite Automotive Club, we believe every dealership can build a high-performance culture—one rooted in trust, vision, and consistent leadership. Don't wait for burnout or turnover to force your hand. Create a culture that grows people and profit, side by side.` },
    { id: 2, title: "Faith on the Showroom Floor: Why Belief Matters in Business", excerpt: "Faith isn't something Glenn Lundy puts in a separate box when it comes to business. It's the foundation under every decision, every interaction, and every goal.", category: "Leadership", readTime: "3 min read", content: `Faith isn't something Glenn Lundy puts in a separate box when it comes to business. It's the foundation under every decision, every interaction, and every goal.

In an industry driven by numbers, volume, and gross, it might seem unusual to lead with spiritual values. But dealerships are full of people—people with pain, pressure, and purpose. And when a leader brings faith into the workplace (with wisdom and humility), something powerful happens: people grow.

At 800% Elite Automotive Club, we don't teach leadership just through checklists—we teach it through conviction. That means:

- Believing in something bigger than yourself
- Serving your team with humility
- Forgiving failure and guiding with grace

It also means showing up with integrity, even when no one is watching.

Faith creates consistency. And consistency creates trust. In today's automotive world, that might be the most valuable currency you can offer.` },
    { id: 3, title: "The 800% Morning Routine That Changed My Life", excerpt: "Most people don't start their day until 7 or 8 a.m. Glenn Lundy starts his at 3:20 a.m.—every day. Because transformation starts with routine.", category: "Personal Development", readTime: "5 min read", content: `Most people don't start their day until 7 or 8 a.m. Glenn Lundy starts his at 3:20 a.m.—every day.

Why? Because transformation starts with routine. The #RISEANDGRIND method isn't just about waking up early. It's about taking full ownership of the day before it takes ownership of you.

Here's a look at Glenn's proven morning system:

**Gratitude and Goals (3:20 AM)**
A quick mindset reset. Glenn begins every day with things he's grateful for—and the goals he's pursuing. No scrolling. No chaos. Just alignment.

**Physical Movement**
A short workout to get the blood flowing. Physical activity sharpens focus and breaks stagnation.

**Personal Development**
Reading, praying, journaling—anything that strengthens the spirit before the body hits the sales floor.

**Social Engagement**
This is where #RISEANDGRIND was born. Thousands of people tuned in every morning to Glenn's Facebook Live, where he poured out value, hope, and vision.

Dealership leaders using this method have seen transformation—not just in their numbers, but in their peace of mind. Want to grow your store? Start by growing your mornings.` },
    { id: 4, title: "From Dad to Dealer: How Family Fuels My Work", excerpt: "Leadership isn't a light switch you flip on at the store and off at home. It's a way of life. And for Glenn Lundy, raising 8 kids is the ultimate leadership training ground.", category: "Leadership", readTime: "4 min read", content: `Leadership isn't a light switch you flip on at the store and off at home. It's a way of life. And for Glenn Lundy, raising 8 kids is the ultimate leadership training ground.

Family and business aren't at odds. They fuel each other.

When Glenn mentors General Managers, he reminds them: you're not just building numbers—you're building a legacy. And how you lead at home will directly shape how you lead your team.

Here are a few lessons from fatherhood that carry into dealership leadership:

**Patience:** Not everything (or everyone) will move at your pace.

**Consistency:** Kids thrive on routine. So do employees.

**Presence:** Your time and attention are your most powerful tools.

When you lead like a parent—with love, structure, and belief—your team will start to reflect that culture. And when you take care of your family, you'll lead from a full cup—not a burned-out shell.` },
    { id: 5, title: "The Power of In-Person Automotive Training", excerpt: "Online training tools are a great asset—but nothing replaces being there. When Glenn Lundy and the 800% team visit dealerships in person, the transformation is immediate.", category: "Training", readTime: "3 min read", content: `Online training tools are a great asset—but nothing replaces being there.

When Glenn Lundy and the 800% team visit dealerships in person, the transformation is immediate. Managers are engaged. Teams feel seen. And strategies turn into action.

Here's why in-person training works:

**Real-Time Customization:** We see the showroom, meet the team, and tailor the strategy.

**Team Buy-In:** Culture shifts faster when leadership is visible and involved.

**Accountability:** It's easier to hold people to a plan when you helped them build it.

Our Tier 3 growth package includes monthly onsite visits for this reason. We don't just tell you what to do—we walk the lot, coach your team, and drive results.` },
    { id: 6, title: "What 20 Years in the Auto Industry Taught Me About People", excerpt: "After two decades in the automotive world, Glenn Lundy has led teams of all sizes. One lesson stands above the rest: It's all about people.", category: "Leadership", readTime: "4 min read", content: `After two decades in the automotive world, Glenn Lundy has led teams of all sizes. From small independents to large franchise groups, one lesson stands above the rest:

It's all about people.

Sales strategies shift. Inventory comes and goes. But the dealerships that consistently grow are the ones that know how to attract, develop, and keep people.

Here's what Glenn has learned:

- Hire for attitude, train for skill.
- Recognition is more powerful than compensation.
- Your top salesperson needs leadership just as much as your green pea.
- People development isn't optional anymore—it's the competitive advantage.` },
    { id: 7, title: "Unlocking Transformation: How 'The Legacy Titles' is Shaping Lives and Businesses", excerpt: "This groundbreaking book is not just a collection of words; it's a movement, a guide to understanding the profound roles we play in our lives and businesses.", category: "Personal Development", readTime: "3 min read", content: `In a world constantly seeking purpose and meaning, Glenn Lundy's The Legacy Titles stands out as a beacon of clarity and direction. This groundbreaking book is not just a collection of words; it's a movement, a guide to understanding the profound roles we play in our lives and businesses.

Imagine waking up each day with a clear, invigorating sense of purpose. That's the promise of The Legacy Titles. Glenn Lundy introduces us to the concept of Legacy Titles—roles that transcend mere job descriptions and tap into the core of our identities. These titles are about who you are, not just what you do.

**Impact Beyond Titles**

The principles within The Legacy Titles are making waves across various spheres of life and business. Here's how:

**1. Empowering Leadership**

Leaders are emerging with newfound confidence, understanding that their role as a "Shepherd" or "Warrior" involves guiding teams with empathy and defending core values with tenacity.

**2. Personal Growth**

Individuals are experiencing profound personal growth by aligning their daily actions with the legacy they wish to build. The book provides actionable insights to help readers embody these roles in everyday life.

**3. Business Innovation**

Businesses are innovating like never before. By embracing their "Builder" mentality, they are crafting sustainable systems that outlast trends and create lasting impact.

**4. Community Influence**

Readers are becoming pillars in their communities, using their titles to inspire and influence positive change around them.

**A Roadmap to Purpose**

What sets The Legacy Titles apart is its practical approach. It's not just theory; it's a roadmap filled with actionable steps. Whether you're a seasoned leader or someone searching for direction, the book offers a clear path to living a life of impact and intention.

**Join the Movement**

Are you ready to redefine your identity and make a lasting impact? Dive into The Legacy Titles and discover the roles you were meant to play. This isn't just a book; it's an invitation to join a movement of purposeful living.

Curious to learn more? Grab your copy of The Legacy Titles and start your journey towards a transformative legacy today.` },
    { id: 8, title: "The Truth About Sales Slumps (And How to Fix Them Fast)", excerpt: "Every dealership hits a slump. But you don't have to stay there. Glenn Lundy helps stores recover with a few core principles.", category: "Sales", readTime: "4 min read", content: `Every dealership hits a slump. But you don't have to stay there.

Glenn Lundy helps stores recover with a few core principles:

**Data-Driven Focus:** Look at lead sources, not just results.

**Reignite Your Culture:** Slumps often signal low energy or unclear targets.

**Tactical Adjustments:** Change your talk tracks. Revisit your CRM cadence. Review your trade process.

Most importantly? Start with leadership. If your GM or Sales Manager isn't energized and consistent, the team won't be either.

Slumps are temporary. Leadership is permanent.` },
    { id: 9, title: "Why Your Next Conference Needs More Than Motivation", excerpt: "It's easy to book a big-name speaker. It's harder to find one who actually moves the needle. Glenn Lundy isn't a hype guy. He's a strategy guy—with energy.", category: "Speaking", readTime: "3 min read", content: `It's easy to book a big-name speaker. It's harder to find one who actually moves the needle.

Glenn Lundy isn't a hype guy. He's a strategy guy—with energy.

When Glenn speaks at automotive conferences, attendees leave with more than a moment—they leave with:

- Tactical tools for leadership and sales growth
- Stories that stick
- A mindset reset they can take back to their store

Dealership events need more than applause. They need transformation. Book someone who's been in the trenches—and can speak to the entire room, from green pea to GM.` },
    { id: 10, title: "How to Build Meaningful Family Traditions in a Busy World", excerpt: "Modern life moves fast — faster than ever. Between work, school, screens, and endless to-do lists, family time often slips to the bottom of the list.", category: "Family", readTime: "4 min read", content: `Modern life moves fast — faster than ever. Between work, school, screens, and endless to-do lists, family time often slips to the bottom of the list. But in the middle of all that noise, traditions act as anchors.

Whether it's a simple Sunday breakfast, an annual camping trip, or a "no phones dinner" rule, family traditions create a rhythm of togetherness that keeps bonds strong even when everything else feels chaotic.

**Why Family Traditions Matter**
Traditions are more than just activities; they're shared stories in motion. Studies show that family rituals improve emotional health, increase children's sense of security, and even reduce stress.

They offer predictability in uncertain times and help bridge the gap between generations. A recipe passed down from your grandmother becomes a living memory. A holiday routine turns into a comfort you can count on.

**Start Small, Stay Consistent**
You don't need elaborate plans or Pinterest-worthy perfection. The magic lies in consistency.
Try beginning with:
- Weekly rituals: Taco Tuesdays, Friday movie nights, Sunday walks in the park.
- Monthly moments: A game night, backyard bonfire, or volunteering together.
- Annual anchors: Summer trips, holiday baking, or a "year-in-review" dinner each New Year's Eve.

Start with something small and meaningful enough to feel natural — something your whole family actually enjoys. Over time, these moments weave into the fabric of your home life.

**Adapt Traditions to Fit Your Lifestyle**
A "busy world" doesn't mean family connection is impossible — it just means it needs creativity. Traditions can evolve with your family's seasons:
- Turn long commutes into family talk or podcast time.
- Celebrate small wins (like the end of a school term) with a favorite treat night.
- In blended or multicultural families, combine traditions to create something new and uniquely yours.

The goal isn't to add more to your to-do list; it's to replace mindless scrolling or rushing with intentional moments of connection.

**Make Tradition Feel Personal**
Traditions don't have to follow a rulebook. In fact, the best ones are usually a little messy, funny, or unplanned. Maybe your "tradition" is dancing in the kitchen every Saturday morning or watching old cartoons on rainy days.

What matters most is meaning — not scale, not expense, and not perfection.

**Final Thought**
In an age of constant change, family traditions offer something rare: a sense of belonging that stays steady. They remind us that even when the world feels overwhelming, there's always a circle of people where we fit perfectly.` },
    { id: 11, title: "The Power of Social Wellness: Why Friendships Are Essential for a Happy Life", excerpt: "When we think about health, we often picture hitting the gym, eating clean, or practicing mindfulness. But there's another layer of wellness that often gets overlooked — social wellness.", category: "Friends", readTime: "4 min read", content: `When we think about health, we often picture hitting the gym, eating clean, or practicing mindfulness. But there's another layer of wellness that often gets overlooked — social wellness. It's the strength of our connections, the quality of our friendships, and the depth of our community.

In a world that prizes independence and digital connection, true friendship has become both rare and restorative. The truth is, lasting happiness doesn't come from "having it all" — it comes from sharing it with others.

**What Is Social Wellness?**
Social wellness is all about building and maintaining relationships that nurture your sense of belonging and emotional balance. It's not about how many friends you have — it's about how authentic those connections are.

Socially well people tend to:
- Communicate openly and empathetically.
- Support others without losing their own boundaries.
- Surround themselves with people who lift them higher.

When friendships are healthy, they act as a buffer against anxiety, loneliness, and burnout. They give us permission to be fully seen — unfiltered and real.

**The Science of Friendship and Happiness**
Research consistently shows that friendships are a cornerstone of long-term happiness. Studies from Harvard and other leading universities reveal that people with strong social ties live longer, experience less stress, and recover faster from illness.

Why? Because connection regulates our nervous system. True companionship literally changes our brain chemistry — increasing oxytocin (the "bonding" hormone) and decreasing cortisol, our primary stress hormone.

When we laugh with someone, share a struggle, or simply feel understood, our brains register it as safety. That's not just comforting — it's healing.

**Modern Friendship: Building Connection in a Disconnected World**
Our daily lives are busier than ever. Social media can trick us into feeling connected while keeping us isolated. The solution isn't deleting your apps — it's being intentional about how you connect.

Here are a few practical ways to nurture social wellness:
- Schedule friendship time like any other priority. Send a voice note, FaceTime, or grab a 20-minute coffee together.
- Invest in emotional honesty. Instead of chasing constant fun, focus on being fully present and supportive.
- Diversify your circle. Different friends can meet different emotional needs — mentor-type friends, creative ones, or those who share your family season of life.

By treating friendship as a vital part of health, not a luxury, you'll start to notice your energy, mood, and purpose all rise.

**Quality Over Quantity**
You don't need a squad — you need depth. A smaller circle of trustworthy, emotionally consistent friends is infinitely more powerful than hundreds of casual connections. Look for relationships that:
- Energize you instead of draining you.
- Celebrate your growth without competition.
- Hold space for vulnerability and truth.

Friendship, at its best, is mutual wellness. You give it, you receive it, and you grow together.

**Final Thought**
Friendship is medicine for the modern soul. It eases loneliness, amplifies joy, and gives us courage when life feels heavy.

So call that friend. Make the plan. Send the message. Because your physical, emotional, and mental health all depend — in more ways than we realize — on the quality of your connections.` },
    { id: 12, title: "Smart Money Habits for a Stress-Free Life: How to Build Wealth Without Burnout", excerpt: "Money can bring freedom — or it can bring worry. For many people, finances are one of the biggest sources of stress, yet the goal isn't just to have more — it's to create peace.", category: "Finance", readTime: "5 min read", content: `Money can bring freedom — or it can bring worry. For many people, finances are one of the biggest sources of stress, yet the goal isn't just to have more — it's to create peace. True financial wellness is about managing your resources in a way that supports your life, rather than controlling it.

Building wealth without burnout starts with habits — small, doable actions that compound over time, just like your savings.

**1. Redefine Wealth: Focus on Freedom, Not Numbers**
The first step toward financial peace is revisiting what "wealth" means to you.
For some, it's a six-figure income. For others, it's debt-free living, flexible hours, or the ability to take a family vacation without credit card anxiety. The key is alignment: your money should serve your values.

When you define wealth in terms of time, freedom, and lifestyle, your financial strategy naturally becomes more sustainable—and a lot less stressful.

**2. Automate Your Money**
Decision fatigue is real. The more you rely on willpower to save, the less likely it is to happen. Automation eliminates the need for constant choices and helps your goals run on autopilot.
Start by:
- Setting up auto transfers from checking to savings right after payday.
- Automating investments into retirement or index funds.
- Scheduling recurring bill payments to avoid late fees and emotional clutter.

These simple systems turn discipline into design — money management that quietly works in the background.

**3. Build a "Calm Budget," Not a Restrictive One**
Traditional budgeting often feels punishing — all limits, no joy. Shift your mindset toward a calm budget: one that prioritizes stability, comfort, and your personal non-negotiables.
To do this:
- Identify your "joy spending zone" — the category that gives you energy (for example, travel, books, or dining out).
- Offset those indulgences with mindful cuts in low-value areas.
- Track your spending weekly instead of daily to avoid overwhelm.

Budgeting is just awareness with intention — not punishment with math.

**4. Tackle Debt Strategically, Not Emotionally**
Debt can feel heavy, but you can lighten it with clarity. Choose a method that fits your mindset:
- Snowball method: Pay off smaller balances first for quick wins.
- Avalanche method: Attack the highest interest rates first for maximum savings.

The key is momentum. Each payment is proof that you're moving toward control — replacing anxiety with empowerment.

**5. Save for Joy, Not Just Emergencies**
An emergency fund is crucial, but so is a "joy fund." When every dollar goes toward practical needs, burnout creeps in.
Plan for small moments that recharge you — a weekend getaway, a celebration dinner, or a creative hobby purchase. These planned pleasures remind you why you're budgeting in the first place.

**Final Thought**
Financial peace isn't about perfection. It's about progress. When your habits are simple, automated, and aligned with your values, money stops being a source of tension and becomes a tool for freedom.

Remember: wealth isn't measured by the size of your bank account — it's measured by how calmly you can breathe when you think about it.` },
    { id: 13, title: "Finding Stillness: Building a Daily Faith Routine That Grounds You", excerpt: "In a world that moves relentlessly fast, stillness has become a rare gift. Between notifications, deadlines, and endless noise, moments of quiet connection can feel almost impossible to find.", category: "Faith", readTime: "4 min read", content: `In a world that moves relentlessly fast, stillness has become a rare gift. Between notifications, deadlines, and endless noise, moments of quiet connection can feel almost impossible to find. Yet it's in those quiet moments that we recharge our spirit and find our center.

Building a daily faith routine isn't about religion as much as rhythm. It's about making time each day to reconnect with what's eternal, steady, and grounding — the presence that reminds you that you are not alone.

**Why a Faith Routine Matters**
Faith gives structure to meaning. Just like our physical and mental habits shape our well-being, spiritual habits shape our sense of peace and resilience. Research even shows that consistent spiritual practices lower blood pressure, improve sleep, and increase overall life satisfaction.

When faith becomes part of your daily rhythm, you move through life with deeper clarity, even when circumstances are uncertain.

**Start With a Small Ritual**
The beauty of faith is that it meets you where you are — no performance required. Your "routine" might take five minutes or fifteen; what matters most is intention.
Try starting with:
- Morning stillness: Begin your day in silence, meditation, or short prayer before reaching for your phone.
- Gratitude journaling: Write one line each day about where you saw grace or goodness show up.
- Evening reflection: Take a minute before bed to release the day — its worries, its wins, and its lessons.

These simple rituals transform faith from something you visit into something you live.

**Make It Personal**
Faith routines don't have to look the same for everyone. Some find stillness in nature walks or music; others reconnect through reading sacred texts or lighting a candle.
Ask yourself:
- What helps you feel most present and peaceful?
- Where do you feel closest to something greater than yourself?
- How can you make those moments more frequent and intentional?

Your answers will guide you toward a rhythm that feels authentic instead of forced.

**Bring Faith Into the Everyday**
The ultimate goal is integration — not compartmentalization. Faith shouldn't stay in a morning journal; it should flow into how you treat colleagues, how you respond to stress, and how you show love to your family.

Moments like forgiving someone, showing patience in traffic, or helping a neighbor are all expressions of quiet faith. When spiritual awareness becomes an undercurrent in daily life, it turns the ordinary into the sacred.

**Final Thought**
Stillness is not the absence of movement — it's the presence of peace. A daily faith routine gives your soul something steady to rest on when everything else changes.

Start small, show up consistently, and let those moments of grace expand. The more you nurture faith, the more it transforms not just your days, but your way of being in the world.` },
    { id: 14, title: "How to Fall in Love With Exercise (Even If You've Always Hated It)", excerpt: "For some people, movement feels natural — for others, it feels like punishment. If the idea of working out brings more dread than excitement, you're not alone.", category: "Fitness", readTime: "4 min read", content: `For some people, movement feels natural — for others, it feels like punishment. If the idea of working out brings more dread than excitement, you're not alone. The good news? Falling in love with exercise isn't about forcing yourself to endure something you hate — it's about finding a way to move that feels like freedom.

Once fitness stops being about guilt or goals and starts being about joy, everything changes.

**1. Redefine What "Exercise" Means**
If you think of exercise as hours on a treadmill, no wonder it feels like torture. Movement can look like anything that gets your body energized and your heart rate up — dancing in the kitchen, hiking, gardening, or playing tag with your kids.

When you redefine exercise as simply "moving your body on purpose," every step, stretch, and dance becomes a celebration rather than a chore.

**2. Focus on How It Feels — Not How It Looks**
The fitness industry often sells transformation through appearance. But the real power of movement lies in how it makes you feel: more alive, calmer, and mentally clearer.
After a good workout, your brain releases endorphins and serotonin — natural mood-boosters that help reduce anxiety and increase focus. Exercise becomes easier when it's about chasing energy instead of results.

Ask yourself after each session: Did that make me feel better? If the answer is yes, you're already succeeding.

**3. Start With "Micro-Movement"**
Don't pressure yourself to jump straight into long, intense workouts. Sustainable exercise comes from starting small.
Try:
- A 10-minute walk after lunch.
- A 5-minute stretch each morning.
- Dancing to your favorite song before getting ready for the day.

Micro-movements build momentum. Over time, those small actions add up — physically, mentally, and emotionally.

**4. Find the Fun Factor**
If movement feels miserable, you won't keep doing it. Explore different forms of exercise until something clicks — spin class, swimming, pilates, or pickleball (yes, pickleball counts).
The goal is to discover what makes your body want to move, not just what burns the most calories. Think joy over judgment.

**5. Build a Ritual, Not a Regimen**
Consistency comes from ritual — something that fits into your life's rhythm without becoming another task on your list. Try pairing movement with moments you already enjoy:
- Stretch while your coffee brews.
- Walk while listening to your favorite podcast.
- Do some breathing or yoga before bed to unwind.

When movement becomes part of your daily flow, it transforms from obligation to self-expression.

**Final Thought**
Exercise isn't about perfection. It's about participation — showing up for yourself in small, consistent ways. When you move because it makes you feel grounded, strong, and alive, fitness becomes a gift you give yourself every day.

So move a little today. Let joy lead the way.` },
    { id: 15, title: "The Lifelong Learner's Toolkit: How to Keep Growing No Matter Your Age", excerpt: "Learning doesn't stop when school ends — it evolves. The world is changing faster than ever, and the most successful, fulfilled people share one thing in common: they never stop learning.", category: "Education", readTime: "4 min read", content: `Learning doesn't stop when school ends — it evolves. The world is changing faster than ever, and the most successful, fulfilled people share one thing in common: they never stop learning.

Lifelong learners don't just collect information — they cultivate curiosity. They see every new experience, challenge, or skill as an opportunity to expand who they are. The good news? You don't need a classroom to be a student of life.

**1. Think of Learning as a Lifestyle**
Many people treat learning like a short-term project — something to start and finish. But true growth happens when learning becomes part of who you are.
Think of it as nourishment for your mind and spirit. Instead of cramming knowledge, create gentle consistency. Read a few pages daily. Listen to educational podcasts while driving. Watch one documentary a week.

Learning becomes easy when it's woven seamlessly into how you live, not added like another chore.

**2. Adopt the Beginner's Mindset**
Confidence is valuable, but curiosity is vital. The "beginner's mindset" — also known as shoshin in Zen philosophy — reminds us to stay open, humble, and eager to learn, no matter how experienced we become.

Ask questions like:
- "What can this teach me?"
- "What's another way to see this?"
- "What can I unlearn?"

When you stop chasing status and focus on exploration, learning turns from obligation into wonder.

**3. Curate, Don't Consume**
In the digital era, we're surrounded by endless information — but very little of it sticks. The trick is not to learn more, but to learn better.
Here's how to curate your learning:
- Follow a few expert voices instead of endless feeds.
- Keep one focused goal per season (for example, learn conversational Spanish or study emotional intelligence).
- Take succinct, handwritten notes — the physical act helps solidify memory and understanding.

Curating brings clarity. It ensures your learning actually deepens your perspective instead of overwhelming it.

**4. Apply What You Learn**
Knowledge without action fades fast. Once you learn something new, look for immediate, real-life ways to apply it:
- After reading about communication, practice it in your next meeting.
- Try the productivity tactic you just discovered for one week.
- Teach a friend what you've learned — sharing knowledge helps retain it longer.

Learning sticks when it becomes embodied experience, not just intellectual awareness.

**5. Embrace "Microlearning" Moments**
Traditional education taught us that growth happens in classrooms or degree programs — but today, it happens everywhere. Microlearning turns spare minutes into growth opportunities.
You can learn in five-minute bursts: while waiting in line, commuting, or winding down for the night. Apps, ebooks, and nano-courses make it effortless. Every small moment adds up to transformation over time.

**Final Thought**
The most powerful education isn't something you finish — it's something you live.
Stay curious. Ask questions. Read, listen, experiment. The more you feed your mind and challenge your comfort zone, the richer, wiser, and more creatively fulfilled your life becomes.

Learning is the one investment that never stops paying dividends — and the best time to start again is always now.` },
    { id: 16, title: "The New Self-Care: 10 Micro Habits That Actually Boost Your Mental Health", excerpt: "Self-care isn't bubble baths and face masks (though those can help). It's what you do every day to protect your peace of mind, manage stress, and reconnect with yourself when life's chaos starts to creep in.", category: "Mental Health", readTime: "4 min read", content: `Self-care isn't bubble baths and face masks (though those can help). It's what you do every day to protect your peace of mind, manage stress, and reconnect with yourself when life's chaos starts to creep in.

The truth is, mental health is built in small, consistent moments — not massive overhauls. These 10 micro habits take just minutes, but together, they can drastically shift your mood, focus, and emotional resilience.

**1. Morning Mind Check-In**
Before scanning emails or social media, take 60 seconds to notice how you feel. Ask yourself: "What do I need today?" Awareness is the first step to caring for your mind.

**2. Breathe Before Reacting**
When you feel stressed, try the 4-7-8 method — inhale for 4 seconds, hold for 7, exhale for 8. This simple breathing rhythm signals your body that you're safe and helps regulate emotions.

**3. Practice the Two-Minute Tidy**
Research shows clutter increases stress. Spend two minutes clearing a space — your desk, sink, or nightstand. A small order in your environment brings calm to your mind.

**4. Limit Digital Noise**
Set a boundary around social media use. Maybe no scrolling before breakfast or after 8 p.m. Digital simplicity keeps comparison and overwhelm at bay.

**5. Move for Your Mood**
You don't need a full workout — just move intentionally. Stretch. Take a walk. Stand up every hour. Movement releases endorphins that lift depression and anxiety.

**6. Schedule "White Space"**
Your calendar should include breaks that aren't for chores or calls. Protect quiet minutes each day for reflection or nothing at all. Stillness restores mental clarity.

**7. Write One Line of Gratitude**
You don't need a long journal session. Write one sentence about something good that happened today — even something as simple as great coffee or kind words.

**8. Check In With Someone You Trust**
Connection is medicine. Text a loved one or call a friend for a quick chat. You'll both feel better afterward — social support fuels resilience.

**9. Notice Nature**
Step outside and actually notice. The air on your skin, the sound of wind, the color of the sky. Nature pulls you gently back to the present and reminds you that calm still exists.

**10. End the Day With Kindness**
Before bed, replace self-criticism with grace. Ask, "What's one thing I did well today?" Validation doesn't make you complacent — it makes you grounded.

**Final Thought**
Mental wellness isn't about escaping life's challenges — it's about building the emotional tools to move through them with balance and compassion.
Tiny, consistent acts of self-respect add up to real strength. So don't wait for a perfect morning routine or big breakthrough. Start with one small habit today — because small things, done often, create big change.` },
    { id: 17, title: "Building a Career with Purpose: How to Find Meaning in Your Work", excerpt: "It's easy to treat a career like a checklist — earn the degree, get the job, chase the promotion. But as life gets busier and priorities shift, many people start asking a deeper question: Why am I doing this?", category: "Career", readTime: "4 min read", content: `It's easy to treat a career like a checklist — earn the degree, get the job, chase the promotion. But as life gets busier and priorities shift, many people start asking a deeper question: Why am I doing this?

Purpose at work isn't about status or salary. It's about alignment — knowing that your daily effort connects to something bigger, something that matters to you. When your values and your work link up, burnout fades and fulfillment begins.

**1. Redefine Success in Your Own Terms**
True purpose starts by rejecting someone else's definition of success. Maybe success once meant climbing the corporate ladder, but now it means flexibility, impact, or creativity.
Take time to reflect:
- What actually energizes you in your current role?
- What parts of your job drain you?
- Which values do you want your work to reflect — growth, service, freedom, balance?

Your answers become your North Star — a guide that points your career toward meaning instead of merely achievement.

**2. Identify Work That Feeds, Not Depletes**
Work that feels meaningful often shares three qualities:
- You're good at it — it uses your strengths.
- You enjoy doing it — it feels satisfying or "right."
- It helps others — it contributes beyond yourself.

If your current job doesn't align perfectly, look for small ways to bring purpose into what you already do: mentor someone, lead a cause, or suggest a project that excites you. Sometimes meaning grows right where you are planted.

**3. Connect Your Daily Tasks to a Bigger Picture**
Even routine work takes on value when you link it to the bigger mission behind it. For example, an accountant doesn't just crunch numbers — they create stability and trust. A marketer doesn't just write ads — they connect people with solutions.
Find the human reason behind what you do. That mental shift can turn repetition into purpose.

**4. Keep Growth at the Center**
Purpose thrives in growth. When you stop learning, you start disconnecting from your work. Continuous development — whether through mentorship, new challenges, or creative experimentation — keeps your career feeling fresh and alive.
Think of learning not as climbing higher, but as expanding wider: build soft skills, emotional intelligence, and new perspectives.

**5. Balance Ambition with Well-Being**
Fulfillment comes when ambition meets self-awareness. Hard work should support your life, not consume it. Check in with yourself regularly: Am I proud of what I'm building? Is this how I want to feel every day?
Purposeful careers require space for reflection. When work feels aligned and energized, effort becomes joy instead of exhaustion.

**Final Thought**
A meaningful career isn't stumbled upon — it's crafted. You create it through clarity, intention, and courage to follow your values.
When you bring purpose to your work, you bring presence to your life. Every email, meeting, and late-night idea becomes part of something greater — not just a job, but a legacy built from the inside out.` },
]

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedPost, setSelectedPost] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 992)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const filteredPosts = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const styles = {
        container: { width: "100%", minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        headerSection: { padding: isMobile ? "80px 20px" : "120px 40px", textAlign: "center", maxWidth: "1400px", margin: "0 auto" },
        headerTitle: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px", lineHeight: "1.1", color: "#1a1a1a" },
        headerSubtitle: { fontSize: isMobile ? "1rem" : "1.2rem", color: "#666", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" },
        sectionLine: { width: "60px", height: "2px", background: "#7B3FBF", margin: "30px auto" },
        content: { maxWidth: "1400px", margin: "0 auto", padding: isMobile ? "0 20px 80px" : "0 40px 120px" },
        searchContainer: { position: "relative", marginBottom: "60px", maxWidth: "600px", margin: "0 auto 80px" },
        searchBar: { width: "100%", padding: "18px 24px", backgroundColor: "#f9f9f9", border: "1px solid #e0e0e0", borderRadius: "50px", color: "#1a1a1a", fontSize: "1rem", outline: "none", transition: "all 0.3s ease" },
        blogGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", marginBottom: "80px" },
        blogCard: { backgroundColor: "#ffffff", border: "1px solid #eee", borderRadius: "0", overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease", display: "flex", flexDirection: "column", height: "100%", padding: "40px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" },
        cardCategory: { display: "inline-block", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7B3FBF", marginBottom: "20px" },
        cardTitle: { fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", lineHeight: "1.3", color: "#1a1a1a", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        cardExcerpt: { color: "#666", lineHeight: "1.7", fontSize: "0.95rem", marginBottom: "30px", flex: 1 },
        readMoreLink: { fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", borderBottom: "1px solid #ddd", paddingBottom: "4px", alignSelf: "flex-start" },
        cta: { marginTop: "80px", padding: "80px 20px", backgroundColor: "#111", textAlign: "center", color: "#fff" },
        ctaTitle: { fontSize: "2.5rem", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px" },
        ctaSubtitle: { color: "#999", marginBottom: "40px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 40px" },
        ctaButtonSimple: { display: "inline-block", padding: "18px 40px", backgroundColor: "transparent", color: "#fff", border: "1px solid #fff", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", transition: "all 0.3s ease", cursor: "pointer" },
        modal: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", backdropFilter: "blur(5px)" },
        modalContent: { backgroundColor: "#ffffff", borderRadius: "0", padding: isMobile ? "30px" : "60px", maxWidth: "800px", width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.2)" },
        closeButton: { position: "absolute", top: "20px", right: "20px", background: "none", border: "none", color: "#1a1a1a", fontSize: "2rem", cursor: "pointer", padding: "5px 15px", transition: "all 0.3s ease" },
        modalTitle: { fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px", lineHeight: "1.2", fontFamily: 'Georgia, "Times New Roman", Times, serif', color: "#1a1a1a" },
        modalMeta: { display: "flex", gap: "20px", marginBottom: "40px", fontSize: "0.9rem", color: "#999", borderBottom: "1px solid #eee", paddingBottom: "20px" },
        modalBody: { lineHeight: "1.8", fontSize: "1.1rem", color: "#333" },
    }

    return (
        <>
            <style>{`
                @media (max-width: 992px) { .blog-grid { grid-template-columns: 1fr !important; } }
                .blog-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
                .cta-button:hover { background-color: #fff !important; color: #000 !important; }
            `}</style>
            <div style={styles.container}>
                <div style={styles.headerSection}>
                    <h1 style={styles.headerTitle}>Glenn Lundy <span style={{ color: "#9B59B6" }}>Insights</span></h1>
                    <div style={styles.sectionLine}></div>
                    <p style={styles.headerSubtitle}>Strategies, stories, and leadership principles from the frontlines of the automotive industry.</p>
                </div>

                <div style={styles.content}>
                    <div style={styles.searchContainer}>
                        <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={styles.searchBar} onFocus={(e) => { e.target.style.borderColor = "#9B59B6"; e.target.style.backgroundColor = "#fff" }} onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.backgroundColor = "#f9f9f9" }} />
                    </div>

                    <div style={styles.blogGrid} className="blog-grid">
                        {filteredPosts.map((post) => (
                            <div key={post.id} style={styles.blogCard} className="blog-card" onClick={() => setSelectedPost(post)}>
                                <div style={styles.cardCategory}>{post.category}</div>
                                <h3 style={styles.cardTitle}>{post.title}</h3>
                                <p style={styles.cardExcerpt}>{post.excerpt.substring(0, 120)}...</p>
                                <span style={styles.readMoreLink}>Read Article</span>
                            </div>
                        ))}
                    </div>

                    <div style={styles.cta}>
                        <h3 style={styles.ctaTitle}>Ready to <span style={{ color: "#9B59B6" }}>Transform?</span></h3>
                        <p style={styles.ctaSubtitle}>Discover how the 800% Elite Auto Club can help your dealership achieve breakthrough results.</p>
                        <a href="/800#get-started-today" style={styles.ctaButtonSimple} className="cta-button">Learn More About Our Services</a>
                    </div>
                </div>

                {selectedPost && (
                    <div style={styles.modal} onClick={() => setSelectedPost(null)}>
                        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button style={styles.closeButton} onClick={() => setSelectedPost(null)}>×</button>
                            <div style={{ ...styles.cardCategory, marginBottom: "10px" }}>{selectedPost.category}</div>
                            <h2 style={styles.modalTitle}>{selectedPost.title}</h2>
                            <div style={styles.modalMeta}><span>{selectedPost.readTime}</span></div>
                            <div style={styles.modalBody}>
                                {selectedPost.content.split("\n").map((paragraph, index) => {
                                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                                        return <h4 key={index} style={{ fontSize: "1.2rem", fontWeight: "700", margin: "30px 0 15px 0", color: "#1a1a1a" }}>{paragraph.replace(/\*\*/g, "")}</h4>
                                    } else if (paragraph.trim() === "") {
                                        return <br key={index} />
                                    } else if (paragraph.startsWith("- ")) {
                                        return <div key={index} style={{ marginLeft: "20px", marginBottom: "10px" }}>• {paragraph.substring(2)}</div>
                                    } else {
                                        return <p key={index} style={{ marginBottom: "20px" }}>{paragraph}</p>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                )}

                <Footer />
            </div>
        </>
    )
}
