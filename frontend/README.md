# Innovation Game


# WHILE IN DEV:

Using this space for notes

## Packages To Install

#### Cypress
eslint-plugin-cypress

## Next Up

### Immediate

#### Current Player View

* [x] Show Current Player Details
    * [x] hand
    * [x] board
    * [x] score
    * [x] achievements
    * [x] resource totals
    * [x] age
* [x] Show Action Details
    * [x] current action number
    * [x] current action options
* [x] Show card piles
    * [x] # cards remaining (per age)
    * [x] achievements
* [ ] Show Opponents Details
    * [ ] boards
    * [ ] scores
    * [ ] score pile details
    * [ ] achievements
    * [ ] rescource totals
    * [ ] hands (basic)

### Future

* [ ] Add game play logic
* [ ] Add dogma action functions

## Start Game:

1. SHOW PLAYERS FORM
    * User adds players
2. USER SUBMITS FORM
    * Create deck
    * Pull out achievements
    * Create initial player boards
    * Create initial player hands with initial cards
    * Create initial scores and score piles
    * Create initial resource totals 
3. SET STATE & SHOW SELECT FIRST CARD FORM
    * Each player selects first card to meld
4. SUBMIT FIRST CARD
    * Remove card from hand
    * Add card to board
    * Update resource totals
5. REPEAT FOR EACH PLAYER
    * Determine player order
6. SET PLAYER ORDER STATE -> READY TO START GAME
