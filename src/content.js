const productData = [
  {
    id: 1,
    name: " APPLE MACBOOK PRO M1",
    image: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSm44gaEoQBVAddfSOiG1Hibs2wvew09BRc47iEf6I8ku4Ju8eKOdAqL-VwpNDO",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQylZJEhXJi9VRJBduL7lU6WwzbgBBkswc9FWxn28_Od4anrevjObycgAJ6D7Yy",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCWUaZDo733fr_qqMD4a131DKRDOT3UNHsC7UaPezkPTeHnf0SbraL5usIZbx",
    ],
    price: 320,
    quantity: 10,
  },
  {
    id: 2,
    name: "APPLE MACBOOK AIR M1",
    image: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuK2qdeuoR0UrNONpjpLtFXOnRLLGdrgtd3PcTK9MExkGlQkExtA8__I7EvJvQ",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTcmFRw6jQDkidBBTOfgeFwt2O5CXLqmEIFZPvzepqRrE2G6KpQ4RUzpJoFpDYv",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFMmLK0wIY3j5EBq8OC3vXqcfVkxdtEC3CgoCrjvek8ownqwv7VNDA9kHreHiV",
    ],
    price: 220,
    quantity: 15,
  },
  {
    id: 3,
    name: "IMAC",
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2a8ShuBKE7UcwmEY5juvllU_Bde_OOpjWkc3Ng0RY74Zv2HBwYqr3oyf2kzUM",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbFzmHOmCV9c6J7biNCEvp62BFyTXhiXQjuwElMafsacXqQdJkV-pTM48l9doB",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLZaHg9b8J0YYxUBCIZb9u-bfcvJ1YAoHg6rYCalMWIrHLsvXidYhbpCW7pLj-",
    ],
    price: 170,
    quantity: 5,
  },
  {
    id: 4,
    name: "DELL XPS 3",
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvDOV4cYUOZx8ss0iaBx6uYx6_J4_C8iRn6HvrfA6QKmd6qG4AQqLemlV_Jey",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgJ-edRYGSxnSOaP8ULd_OME_X-pPwV8L9qs-is5TNoFWexey97BmyXd_XnyD9",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtglV4q2sd9EBTsLrhxCShMKeKrJbl9J1HUnNwsXYMtNZRdhnCaunJm8fpPV35",
    ],
    price: 163,
    quantity: 8,
  },
  {
    id: 5,
    name: "Dell Inspiron 15 3000",
    image: [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaGrvUwrCR4cx27Fp23FpI1nQmG3__uI3Ri94aTPrDdnMDM6q02jRdMldLZgVH",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQG2qiLRbkU3G7tlrx0rlFBfoK5OU4tdtnLEFE0L4aA9bnnOLXNqBZj0bwR6lDM",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTpAm2EP2BxCaFN2CWnLzQdG53rAfR09bfMqj6tr-idm9YX-8ItsyQaXPPRoWwm",
    ],
    price: 238,
    quantity: 13,
  },
  {
    id: 6,
    name: "HP Spectre x360 14",
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQNvIYJLQqHWas9p9vDi1W1m8pn5LZVJeJoSV2oJo3ghryyCyIiat2_oQN88E",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNquMj0QF8fk6J6sBqldu1-XcZ85mGpLHNEVA7kXzHu7NkRCdWh7viZmh5EXYr",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSJePUrnA7agu4_HXFlROy2atwPZCkyf0svQJqWfFi24I3j4RgK2c1rRtEQBt",
    ],
    price: 300,
    quantity: 12,
  },
  {
    id: 7,
    name: "HP Envy 13",
    image: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtrRuMdKLcbOZyNqmAyfSU9FkjJ7UxO4N09tMDVuMDQp7cre356pKhnUGC83SM",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRX7_JkTsrFTJQeOKRX1qr6p0F97fgyb7KBeoQodOK-4AI4cUM_TgLnZ7iKvwMs",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlX4yeipWi_DkJtX1bH3DfiI5T5_KEpqTDtaC8_hMQbsvhkHkDHvh0Z_vhyH8H",
    ],
    price: 185,
    quantity: 5,
  },
  {
    id: 8,
    name: "Lenovo ThinkPad X1 Carbon",
    image: [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9Mc4e1xInyjo0LzouZ-m_GJbaiFwk5cF1uFJMvCbcEGBbCU-wJLodhXqdyrL4",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSE6SZLW4M82l5vOjn743Uj0S6ZBUVSrdFosD3JvYrn7vMhSWR2QNkKtEtnoPaZ",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlU4ZyU-g4EyKLkCjrLQyyvvl5eTxOsuV9d_7aFWJTYQrLJakgEhYiSs1uE-Cl",
    ],
    price: 160,
    quantity: 20,
  },
  {
    id: 9,
    name: "Lenovo IdeaPad 5",
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUaLybZiMQ-9COLTB68XbBke3vyVQCmQJuYVG4sug6fBvNb7ZTUZKWIP2TxUb",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDmnIhwvcMYlZ_jNj0AQ2t2ra7gWFaN4fPCwvQgxwXUdYlKsvJGG6-86WWgQY",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7rlBor5AR5XuHuZ3ENcByYOUoSppxYwuy6oO_0x3ULGSi44hl3yE_JQ-L31LM",
    ],
    price: 120,
    quantity: 16,
  },
  {
    id: 10,
    name: "Microsoft Surface Laptop 4",
    image: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRT17wzaqaaL2iixdYqoytQCNk-9l_ubsHXz0uOk5ntHCinMYP8K1kUkEL_s3dh",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTzYNTlj9Fiay4ofEnugImLb5MPmRhl7kyQGpe_jSvIPzU9f20KyEw3H16WQw",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUnXycuEUsGg37mTCw5SGIqhaFJLR3wz3AR4B_fLAixHPotjx25E4C2vNJFHbx",
    ],
    price: 540,
    quantity: 4,
  },
  {
    id: 11,
    name: "Microsoft Surface Pro 8",
    image: [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3Tr5id9hgq2Pd1-ziqgN3wZBSUv5BpQHTYwHjZdsIvpABvdxAKschh_KkKI4-",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnL8k5qZxG1t__td9tsdsLJpEMo-ULnq3P5_tPEbpNbnuvXmNqu2QtYc3GWEj8",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmUtKR8gyJsUHAi-v3Ep-W-9ZjemWDBdu2kG8Z248J_RaJWLgbKfXMyig1e3lY",
    ],
    price: 445,
    quantity: 7,
  },
  {
    id: 12,
    name: "Razer Blade 14",
    image: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQT0nGqgfuBbzNlkNZ3umf6dz3agy6HCBqRYM1tgAUvopXKAyZNhyMtUxP-oEVy",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNRFGqnxaBQQPs1NP_nn_Rei_T-fmaZk4AXq_cGp4lE0cOcvUE4PdU7Kl_mYS",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDDUjkn0-F2-wEjTuWZ56uwR3NtWhHziYvBJi8CwdvxK-3OxDip8jKk2vrgX-N",
    ],
    price: 210,
    quantity: 16,
  },
  {
    id: 13,
    name: "ASUS ROG Zephyrus G15",
    image: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSi_mL3_9gxs9s87boHQ22fJpU9js5MnPF9X5x__AtbOZ9aeOb8_TuR2EKgNGMt",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqJCzfiybtDyKdzhSimM7r8wL0einrkHY-1v4W6nvh0n8qEdleivqQkrdKjzEp",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsrZbRTdQrJrFYa8JNNKTVtY6crQGLQv8YFIvdS1REvbHVEkOovRWzcT_zKu_x",
    ],
    price: 180,
    quantity: 2,
  },
  {
    id: 14,
    name: "ROG Strix G15",
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCdCMfTFSddlEUh6EIWHjJZt4wDgwoCsOG2sbc8D7DJBwGQuhHVeY7kCrB6Vw",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysS05IIXOdmMacNG7C4qwZGEvnJfsmG45O56f8WvTSc40JxqptZ2UzO6JtEBk",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRmuJB64BQ_p1x2zY-ZIHOn0MGBmEQ0EJZST8fj30nOvSyUNC3IqfXD9gcEt5-b",
    ],
    price: 210,
    quantity: 8,
  },
  {
    id: 15,
    name: "Acer Swift 5",
    image: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQc_Pa8n4ZTifg-xA9nbo3FUwT4kcdeD5oC99YQqdP6GcMtsm6TUB4rz7lSWqTC",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCZAQvB7OW1izCzM4s8KjIWkKMBOAemX_wQ_mpg8lagQU0RMFWKkMtvIrSUEzF",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSN8DDj3edWyH_UjBuA1cobm_NOwteB_qqL4y8Yc_UXsyk723jzWSxWdhNGTHeY",
    ],
    price: 120,
    quantity: 10,
  },
];

export default productData;
