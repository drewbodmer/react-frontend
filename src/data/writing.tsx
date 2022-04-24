import ReactMarkdown from "react-markdown";
export enum Type {
  BOOK = "Book",
  NOTE = "Note",
  IDEA = "Idea",
  MEDIA = "Media",
  PERSON = "Person",
  PAPER = "Paper",
}

export interface BlogEntry {
  type: Type;
  title: string;
  text: string;
  image?: string;
  pdf?: string;
}

export const blogs: Array<BlogEntry> = [
  {
    type: Type.PAPER,
    title: `Backpropagation Calculus`,
    text: ``,
    pdf: `/assets/backprop.pdf`,
    image: `https://i.ytimg.com/vi/Ilg3gGewQ5U/maxresdefault.jpg`
  },
  {
    type: Type.PAPER,
    title: `RNN/LSTM Headline Generator`,
    text: ``,
    pdf: `/assets/finalreport.pdf`,
    image: `https://www.iarai.ac.at/wp-content/uploads/2021/02/MC-LSTM.jpg`
  },
  {
    type: Type.NOTE,
    title: `Alternatives to Proof of Work`,
    image: `https://forkast.news/wp-content/uploads/2020/04/Proof-of-Work-1260x709.jpg`,
    text: `
  ### Proof of Participation and Fees
  PoPF users are selected to mine a block based on their participation in the mining process and what they pay in fees. 
  
  ### Proof of Reputation
  - participants who publish blocks when selected are rewarded with trust
  - more trustworthy nodes are more likely to be selected for block mining
  
  
  ### Proof of Experience
  - prior proof of work lowers the difficulty level of mining a block
  
  
  ### Proof of Adjourn
  - participating nodes cannot mine or propose blocks while a candidate is being validated
  
  
  ### Proof of Sincerity
  - Relies on 'sincerity' of a participating node
  - Players select their own sincerity based on computing abilities
  - sincerity functions as difficulty - lower sincerity means easier to mine a block but a smaller block reward
  
  ### Proof of Accuracy
  - The block leader must prove that they possess the data required to compute the problem to a specified accuracy
  - data is scattered across network addresses and nodes must compete to get this data
  
  
  ## Evaluation Metrics
  
  ### Throughput
  The number of blocks that can be verified and deployed to chain per second
  
  ### Scalability
  The ability of the blockchain to be expanded to a large number of users & data
  
  ## Security
  How well a consensus protocol resists attacks
  how aligned the incentives are
  
  ## Finality
  How immutable the blockchain is
  
  
  
  ## Conclusion
  Nodes are validated on:
  - Time (staked?)
  - Reputation
  
  Nodes have a (capped) time bank that accumulates with time participating in the network. In order to mine a block, nodes stake their accumulated participation time. A node is chosen based on the amount of time participating *honestly*. After mining a block, the participation time is reset.
  
  - Doesn't need tons of energy like PoW
  - Prevents whales like in PoS
  
  
  ### Adversarial players
  - 51% of time in network is not sustainable in a long time horizon because successfully mining a block resets your time
  - An adversarial node can build up participation time to try to mine a block, but also must build reputation. When it proposes a new block, other nodes check transactions in the block
  
  `,
  },
  {
    type: Type.BOOK,
    title: `"What is Real?"`,
    image: `https://images-na.ssl-images-amazon.com/images/I/81r1LKkMkGL.jpg`,
    text: `What is Real? is a book by Adam Becker that outlines the current problems that exist in the foundations of quantum physics, namely what the author calls the "Copenhagen interpretation". It outlines the history of quantum physics with an emphasis on how today's theories developed.`,
  },
  {
    type: Type.IDEA,
    title: `Proof of selection ideas`,
    image: `https://veritusgroup.com/wp-content/uploads/2017/01/consensus-accuracy-2.jpg`,
    text: `
  #### How to incentivize transaction processing?
  _Likelihood of reward is proportional to 'reliability' of the node_
  
  #### How to deal with: double spending, forks, 51% attacks, Sybil attacks, selection fixing?
  - **Double spending:** 
  
  
  
  *Can we create a competition where nodes compete to perform the best (on a reliability scale?) The node implementation can be unique, the consensus algo just has to match and it scores nodes based on how well they 'keep track' of the network. 
  
  Essentially, the scoring mechanism for each node is immutable but the communication mechanism can be modified.
  
  **Scoring:** When a node proposes a block, the other nodes score it based on:
  1. How similar it is to their own
    1. *Whether transactions are in order
    2.* *Whether there are missing transactions*
  2. How much the node is charging??
  3. Whether the proposer has been active (sent updates to other nodes)
  
  The proposer stakes x time (i.e. participation time in the network)
  If the proposer is found to be malicious they get banned from the network for x time
  Block rewards are proportional to time spent in the network 
  
  Is it a problem that old nodes have more power?
  
  
  
  **Election system for new blocks**
  Election system remains the same, voting remains the same, but the way to campaign can be different`,
  },
  {
    type: Type.BOOK,
    title: `SENS`,
    image: `https://images-na.ssl-images-amazon.com/images/I/61GQpo2pd9S.jpg`,
    text: `SENS (Strategies for Engineered Negligible Senescence) is a research institute founded by Aubrey DeGrey that focuses on practical solutions to cure and prevent aging. The foundational principle of SENS is that aging is a disease that can actually be treated by standard medical technology within the next few decades.

    The SENS theory of aging is that aging is an accumulation of damage through several body pathways, ultimately leading to catastrophic collapse and death. These pathways each have evolutionary cleaning mechanisms that slow down the damage accumulation, but they cannot keep up and are ultimately overwhelmed. 
    
    The proposal of DeGrey is that we do not need paradigm-shifting treatments to prevent aging, rather we simply need to enhance the body's pre-existing mechanisms so that they can keep up with the rate of damage accumulation.
    
    
    | Source of damage | Rejuvenation |
    | -------- | -------- |
    | Extracellular aggregates    | Immunotherapy     | 
    | Death-resistant cells | Targeted ablation |
    | Extracellular matrix stiffening | AGE-breaking molecules & tissue engineering |
    | Intraceullular aggregates | Lysosomal engineering | 
    | Mitochondrial mutations | Allotopic expression of 13 mitochondrial proteins |
    | Cancer | Removal of Telomerase |
    | Cell loss & tissue atrophy | Stem cells |
    
    `,
  },
  {
    type: Type.BOOK,
    title: "Peak",
    image: `https://m.media-amazon.com/images/I/41ylBBBhYjL.jpg`,
    text: ``,
  },
  {
    type: Type.BOOK,
    title: "Deep Work",
    image: `https://m.media-amazon.com/images/I/417yjF+Z5zL.jpg`,
    text: ``,
  },
  {
    type: Type.BOOK,
    title: "A World Without Email",
    image: `https://m.media-amazon.com/images/I/41WutfvqdYL.jpg`,
    text: ``,
  },
  {
    type: Type.BOOK,
    title: "Indistractible",
    image: `https://images-na.ssl-images-amazon.com/images/I/41OWvxYMt0S._SX331_BO1,204,203,200_.jpg`,
    text: ``,
  },
];

export default blogs;
