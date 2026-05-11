const products = [
  {
    id: "1",
    name: "Red Bloom Halter Neck Kurti",
    originalPrice: "&#8377;599.00",
    price: "&#8377;499.00",
    short: "A red floral halter kurti with a fresh everyday fit.",
    description:
      "A breezy red bloom halter neck kurti made for casual days, easy styling, and a bright feminine look.",
    image: "../images/Red_Bloom_Halter_Neck_Kurti_1.jpg",
    images: [
      "../images/Red_Bloom_Halter_Neck_Kurti_1.jpg",
      "../images/Red_Bloom_Halter_Neck_Kurti_2.jpg",
      "../images/Red_Bloom_Halter_Neck_Kurti_3.jpg",
      "../images/Red_Bloom_Halter_Neck_Kurti_4.jpg",
      "../images/Red_Bloom_Halter_Neck_Kurti_5.jpg",
    ],
    rating: "4.8",
    reviewCount: 31,
    reviews: [
      {
        name: "Nisha P.",
        stars: 5,
        text: "The red print looks fresh and the halter neck fit is really flattering.",
      },
      {
        name: "Kavya R.",
        stars: 4,
        text: "Comfortable for daily wear. The color is bright but not too loud.",
      },
    ],
  },
  {
    id: "2",
    name: "Mustard Bell Sleeves Kurti",
    originalPrice: "&#8377;599.00",
    price: "&#8377;499.00",
    short: "Mustard floral print with elegant bell sleeves.",
    description:
      "A royal mustard printed kurti with bell sleeves, perfect for festive casual outfits and warm daytime styling.",
    image: "../images/Mustard_Bell_Sleeves_Kurti_1.jpg",
    images: [
      "../images/Mustard_Bell_Sleeves_Kurti_1.jpg",
      "../images/Mustard_Bell_Sleeves_Kurti_2.jpg",
      "../images/Mustard_Bell_Sleeves_Kurti_3.jpg",
      "../images/Mustard_Bell_Sleeves_Kurti_4.jpg",
      "../images/Mustard_Bell_Sleeves_Kurti_5.jpg",
    ],
    rating: "4.7",
    reviewCount: 19,
    reviews: [
      {
        name: "Meera J.",
        stars: 5,
        text: "The mustard shade is beautiful and the bell sleeves make it look festive.",
      },
      {
        name: "Ritika S.",
        stars: 4,
        text: "Nice cotton feel. I liked the sleeve fall and floral print.",
      },
    ],
  },
  {
    id: "3",
    name: "Pink Halter Neck Kurti",
    originalPrice: "&#8377;599.00",
    price: "&#8377;499.00",
    short: "Soft pink blossom print in a halter neck style.",
    description:
      "A gulabi blossom halter neck kurti with a light, graceful shape that works beautifully for relaxed outings.",
    image: "../images/Pink_Bloom_Halter_Neck_Kurti_1.jpg",
    images: [
      "../images/Pink_Bloom_Halter_Neck_Kurti_1.jpg",
      "../images/Pink_Bloom_Halter_Neck_Kurti_2.jpg",
      "../images/Pink_Bloom_Halter_Neck_Kurti_3.jpg",
      "../images/Pink_Bloom_Halter_Neck_Kurti_4.jpg",
      "../images/Pink_Bloom_Halter_Neck_Kurti_5.jpg",
    ],
    rating: "4.9",
    reviewCount: 27,
    reviews: [
      {
        name: "Aarohi M.",
        stars: 5,
        text: "Very pretty pink print. It feels light and perfect for daytime outings.",
      },
      {
        name: "Tanvi K.",
        stars: 5,
        text: "The halter neck style looks elegant with jeans. Loved the fit.",
      },
    ],
  },
  {
    id: "4",
    name: "Midnight Bloom Square Neck Kurti",
    originalPrice: "&#8377;599.00",
    price: "&#8377;499.00",
    short: "Black floral square neck kurti with a bold bloom print.",
    description:
      "A midnight-toned square neck kurti featuring bold floral artwork for a confident, polished everyday look.",
    image: "../images/Midnight_Bloom_Square_Neck_Kurti_1.jpg",
    images: [
      "../images/Midnight_Bloom_Square_Neck_Kurti_1.jpg",
      "../images/Midnight_Bloom_Square_Neck_Kurti_2.jpg",
      "../images/Midnight_Bloom_Square_Neck_Kurti_3.jpg",
      "../images/Midnight_Bloom_Square_Neck_Kurti_4.jpg",
      "../images/Midnight_Bloom_Square_Neck_Kurti_5.jpg",
    ],
    rating: "4.6",
    reviewCount: 22,
    reviews: [
      {
        name: "Isha D.",
        stars: 4,
        text: "The black floral print is classy and easy to style for evenings.",
      },
      {
        name: "Pallavi N.",
        stars: 5,
        text: "Square neck looks very neat. The fabric feels soft after wash too.",
      },
    ],
  },
  {
    id: "5",
    name: "Pink Peplum Top",
    originalPrice: "&#8377;599.00",
    price: "&#8377;499.00",
    short: "A bright pink peplum top with a playful silhouette.",
    description:
      "A cheerful pink peplum top designed for a flattering shape, soft movement, and easy casual styling.",
    image: "../images/Pink_Peplum_Top_1.jpg",
    images: [
      "../images/Pink_Peplum_Top_1.jpg",
      "../images/Pink_Peplum_Top_2.jpg",
      "../images/Pink_Peplum_Top_3.jpg",
      "../images/Pink_Peplum_Top_4.jpg",
      "../images/Pink_Peplum_Top_5.jpg",
    ],
    rating: "4.5",
    reviewCount: 16,
    reviews: [
      {
        name: "Simran A.",
        stars: 4,
        text: "Cute peplum shape and very easy to wear with denim.",
      },
      {
        name: "Diya V.",
        stars: 5,
        text: "The pink is vibrant and the top gives a lovely flared look.",
      },
    ],
  },
  {
    id: "6",
    name: "Blue Ethnic Print Sleeveless Kurti",
    originalPrice: "&#8377;599.00",
    price: "&#8377;499.00",
    short: "Blue ethnic print kurti with a clean sleeveless cut.",
    description:
      "A blue ethnic print kurti with a relaxed sleeveless shape, made for comfort and effortless everyday wear.",
    image: "../images/Blue_Ethnic_Print_Sleeveless_Kurti_1.jpg",
    images: [
      "../images/Blue_Ethnic_Print_Sleeveless_Kurti_1.jpg",
      "../images/Blue_Ethnic_Print_Sleeveless_Kurti_2.jpg",
      "../images/Blue_Ethnic_Print_Sleeveless_Kurti_3.jpg",
      "../images/Blue_Ethnic_Print_Sleeveless_Kurti_4.jpg",
      "../images/Blue_Ethnic_Print_Sleeveless_Kurti_5.jpg",
    ],
    rating: "4.7",
    reviewCount: 21,
    reviews: [
      {
        name: "Rhea T.",
        stars: 5,
        text: "The blue ethnic print is subtle and the sleeveless cut is comfortable.",
      },
      {
        name: "Mansi G.",
        stars: 4,
        text: "Good everyday kurti. Looks polished with simple accessories.",
      },
    ],
  },
  {
    id: "7",
    name: "Black Straight Sleeves Kurti",
    originalPrice: "&#8377;599.00",
    price: "&#8377;499.00",
    short: "Black straight sleeveless kurti with a crisp leaf print.",
    description:
      "A black leaf print kurti with straight sleeves, ideal for a neat, minimal look with strong visual contrast.",
    image: "../images/Black_Straight_Sleeves_Kurti_1.jpg",
    images: [
      "../images/Black_Straight_Sleeves_Kurti_1.jpg",
      "../images/Black_Straight_Sleeves_Kurti_2.jpg",
      "../images/Black_Straight_Sleeves_Kurti_3.jpg",
      "../images/Black_Straight_Sleeves_Kurti_4.jpg",
      "../images/Black_Straight_Sleeves_Kurti_5.jpg",
    ],
    rating: "4.8",
    reviewCount: 25,
    reviews: [
      {
        name: "Shruti B.",
        stars: 5,
        text: "The leaf print looks premium and the black color is very versatile.",
      },
      {
        name: "Neha C.",
        stars: 4,
        text: "Loved the straight fit. It is comfortable for office casual wear.",
      },
    ],
  },
  {
    id: "8",
    name: "Pink Bell Sleeves Kurti",
    originalPrice: "&#8377;599.00",
    price: "&#8377;499.00",
    short: "A bright pink bloom kurti for statement casual styling.",
    description:
      "A vibrant bloom pink kurti with lively floral styling, made to stand out while staying comfortable.",
    image: "../images/Pink_Bell_Sleeves_Kurti_1.jpg",
    images: [
      "../images/Pink_Bell_Sleeves_Kurti_1.jpg",
      "../images/Pink_Bell_Sleeves_Kurti_2.jpg",
      "../images/Pink_Bell_Sleeves_Kurti_3.jpg",
      "../images/Pink_Bell_Sleeves_Kurti_4.jpg",
      "../images/Pink_Bell_Sleeves_Kurti_5.jpg",
    ],
    rating: "4.9",
    reviewCount: 29,
    reviews: [
      {
        name: "Anika L.",
        stars: 5,
        text: "The pink floral look is gorgeous and the bell sleeves feel dressy.",
      },
      {
        name: "Sakshi H.",
        stars: 5,
        text: "Perfect for brunch or a casual festive day. The print is lovely.",
      },
    ],
  },
];

const logoFallback = "../images/logo.jpeg";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("closeMenu");
  const themeToggle = document.getElementById("themeToggle");

  if (menuToggle && sideMenu && overlay) {
    menuToggle.addEventListener("click", () => {
      sideMenu.classList.remove("translate-x-full");
      sideMenu.classList.add("translate-x-0");
      overlay.classList.remove("hidden");
    });
  }

  if (overlay && closeMenu && sideMenu) {
    overlay.addEventListener("click", closeMenuFunc);
    closeMenu.addEventListener("click", closeMenuFunc);
  }

  function closeMenuFunc() {
    sideMenu.classList.add("translate-x-full");
    sideMenu.classList.remove("translate-x-0");
    overlay.classList.add("hidden");
  }

  function setTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.classList.contains("dark")
        ? "light"
        : "dark";

      setTheme(nextTheme);
    });
  }

  renderProductGrid("homeProducts", products);
  renderProductGrid("productsGrid", products);
  renderProductDetail();
  renderCartPage();
  setupAuthPages();
  setupContactForm();
});

function renderProductGrid(containerId, productList) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  container.innerHTML = productList.map(renderProductCard).join("");
}

function renderProductCard(product) {
  return `
    <a
      href="product-detail.html?id=${product.id}"
      class="group relative z-0 block overflow-hidden rounded-lg bg-white shadow-md hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 transition"
    >
      <div class="bg-gradient-to-br from-pink-50 via-rose-100 to-fuchsia-100 p-3 dark:from-gray-900 dark:via-gray-800 dark:to-pink-950">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="h-full w-full aspect-[4/5] rounded-md object-cover"
          onerror="this.onerror=null; this.src='${logoFallback}';"
        />
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900 group-hover:text-pink-600 dark:text-gray-100 dark:group-hover:text-pink-400">
          ${product.name}
        </h3>
        <div class="mt-4 flex items-center justify-between gap-3">
          <span>
            <span class="mr-1 text-sm text-gray-400 line-through">${product.originalPrice}</span>
            <span class="font-bold text-pink-600 dark:text-pink-400">${product.price}</span>
          </span>
          <span class="rounded-full bg-pink-600 px-4 py-2 text-sm font-medium text-white group-hover:bg-pink-700">
            View
          </span>
        </div>
      </div>
    </a>
  `;
}

function renderStars(count) {
  return `${"★".repeat(count)}${"☆".repeat(5 - count)}`;
}

function renderProductDetail() {
  const container = document.getElementById("productDetail");

  if (!container) {
    return;
  }

  const productId =
    new URLSearchParams(window.location.search).get("id") || "1";
  const product = products.find((item) => item.id === productId) || products[0];
  const galleryImages = product.images || [product.image];

  document.title = `${product.name} - Rabika`;

  container.innerHTML = `
    <section class="bg-gray-50 px-6 pb-16 pt-28 dark:bg-gray-900">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <div
            id="productImageFrame"
            class="group relative overflow-hidden rounded-lg bg-gradient-to-br from-pink-50 via-rose-100 to-fuchsia-100 p-4 shadow-md dark:from-gray-900 dark:via-gray-800 dark:to-pink-950"
          >
            <img
              id="mainProductImage"
              src="${product.image}"
              alt="${product.name}"
              class="w-full aspect-[4/5] rounded-md object-cover transition-transform duration-200 ease-out group-hover:scale-[1.85]"
              onerror="this.onerror=null; this.src='${logoFallback}';"
            />
            <div class="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 opacity-0 shadow-md transition-opacity group-hover:opacity-100 dark:bg-gray-900/90 dark:text-gray-200">
              Move cursor to zoom
            </div>
          </div>
          <div class="mt-4 grid grid-cols-5 gap-3">
            ${galleryImages
              .map(
                (image, index) => `
                  <button
                    type="button"
                    class="product-thumb rounded-md border border-pink-100 bg-white p-1 shadow-sm hover:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-800"
                    data-image="${image}"
                    aria-label="Show ${product.name} image ${index + 1}"
                  >
                    <img
                      src="${image}"
                      alt="${product.name} view ${index + 1}"
                      class="aspect-square w-full rounded object-cover"
                      onerror="this.onerror=null; this.src='${logoFallback}';"
                    />
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600 dark:text-pink-400">
            Rabika Collection
          </p>
          <h1 class="mt-4 text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
            ${product.name}
          </h1>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <div class="text-xl text-amber-400" aria-label="Rated ${product.rating} out of 5">
              ${renderStars(Math.round(Number(product.rating)))}
            </div>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
              ${product.rating} rating • ${product.reviewCount} customer reviews
            </span>
          </div>
          <p class="mt-4 text-2xl font-bold text-pink-600 dark:text-pink-400">
            <span class="mr-2 text-lg font-medium text-gray-400 line-through">${product.originalPrice}</span>
            ${product.price}
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            ${product.description}
          </p>

          <div class="mt-8">
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-lg font-bold text-gray-900 dark:text-gray-100">
                Select Size
              </h2>
              <button
                type="button"
                id="sizeChartToggle"
                aria-expanded="false"
                aria-controls="sizeChartPanel"
                class="font-semibold text-pink-600 underline decoration-pink-300 underline-offset-4 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
              >
                Size Chart
              </button>
            </div>
            <div class="mt-4 flex flex-wrap gap-3">
              ${["XS", "S", "M", "L", "XL"]
                .map(
                  (size) => `
                    <button
                      type="button"
                      class="size-option h-12 min-w-14 rounded-md border border-gray-300 bg-white px-4 text-base font-semibold text-gray-900 hover:border-pink-500 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-pink-400"
                      data-size="${size}"
                    >
                      ${size}
                    </button>
                  `,
                )
                .join("")}
            </div>
          </div>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div class="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <p class="text-sm text-gray-500 dark:text-gray-400">Fabric</p>
              <p class="mt-1 font-semibold text-gray-900 dark:text-gray-100">Pure Cotton</p>
            </div>
            <div class="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <p class="text-sm text-gray-500 dark:text-gray-400">Style</p>
              <p class="mt-1 font-semibold text-gray-900 dark:text-gray-100">Kurti/Top</p>
            </div>
            <div class="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <p class="text-sm text-gray-500 dark:text-gray-400">Use</p>
              <p class="mt-1 font-semibold text-gray-900 dark:text-gray-100">Daily/Festive</p>
            </div>
          </div>

          <div class="mt-8 flex flex-col gap-5 border-y border-pink-100 py-6 dark:border-gray-700">
            <div>
              <h2 class="text-lg font-bold text-gray-900 dark:text-gray-100">
                Quantity
              </h2>
              <div class="mt-3 inline-flex overflow-hidden rounded-md border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800">
                <button
                  type="button"
                  id="decreaseQty"
                  class="px-5 py-3 text-xl font-semibold text-gray-700 hover:bg-pink-50 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  -
                </button>
                <span
                  id="quantityValue"
                  class="min-w-16 border-x border-gray-300 px-6 py-3 text-center font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
                >
                  1
                </span>
                <button
                  type="button"
                  id="increaseQty"
                  class="px-5 py-3 text-xl font-semibold text-gray-700 hover:bg-pink-50 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                data-auth-action="add to cart"
                class="rounded-lg bg-pink-600 px-8 py-3 font-semibold text-white shadow-md hover:bg-pink-700"
              >
                Add to Cart
              </button>
              <button
                type="button"
                data-auth-action="order now"
                class="rounded-lg bg-gradient-to-r from-pink-600 to-fuchsia-600 px-8 py-3 font-semibold text-white shadow-md hover:from-pink-700 hover:to-fuchsia-700"
              >
                Order Now
              </button>
            </div>
          </div>

          <div
            id="sizeChartPanel"
            class="mt-6 hidden overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-pink-100 dark:bg-gray-800 dark:ring-gray-700"
          >
            <div class="bg-gradient-to-r from-pink-50 to-rose-50 px-5 py-4 dark:from-gray-900 dark:to-pink-950">
              <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">
                Size Chart
              </h2>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Measurements are in inches. Choose your usual comfortable fit.
              </p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full min-w-[520px] text-left text-sm">
                <thead class="bg-pink-600 text-white">
                  <tr>
                    <th class="px-5 py-3 font-semibold">Size</th>
                    <th class="px-5 py-3 font-semibold">Bust</th>
                    <th class="px-5 py-3 font-semibold">Waist</th>
                    <th class="px-5 py-3 font-semibold">Hip</th>
                    <th class="px-5 py-3 font-semibold">Length</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-pink-100 text-gray-700 dark:divide-gray-700 dark:text-gray-300">
                  <tr>
                    <td class="px-5 py-3 font-semibold text-gray-900 dark:text-gray-100">XS</td>
                    <td class="px-5 py-3">32</td>
                    <td class="px-5 py-3">28</td>
                    <td class="px-5 py-3">36</td>
                    <td class="px-5 py-3">27</td>
                  </tr>
                  <tr>
                    <td class="px-5 py-3 font-semibold text-gray-900 dark:text-gray-100">S</td>
                    <td class="px-5 py-3">34</td>
                    <td class="px-5 py-3">30</td>
                    <td class="px-5 py-3">38</td>
                    <td class="px-5 py-3">28</td>
                  </tr>
                  <tr>
                    <td class="px-5 py-3 font-semibold text-gray-900 dark:text-gray-100">M</td>
                    <td class="px-5 py-3">36</td>
                    <td class="px-5 py-3">32</td>
                    <td class="px-5 py-3">40</td>
                    <td class="px-5 py-3">29</td>
                  </tr>
                  <tr>
                    <td class="px-5 py-3 font-semibold text-gray-900 dark:text-gray-100">L</td>
                    <td class="px-5 py-3">38</td>
                    <td class="px-5 py-3">34</td>
                    <td class="px-5 py-3">42</td>
                    <td class="px-5 py-3">30</td>
                  </tr>
                  <tr>
                    <td class="px-5 py-3 font-semibold text-gray-900 dark:text-gray-100">XL</td>
                    <td class="px-5 py-3">40</td>
                    <td class="px-5 py-3">36</td>
                    <td class="px-5 py-3">44</td>
                    <td class="px-5 py-3">31</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mt-8 divide-y divide-pink-100 rounded-lg border border-pink-100 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
            <details class="group p-5" open>
              <summary class="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900 dark:text-gray-100">
                Description
                <span class="text-2xl text-pink-600 group-open:rotate-45">+</span>
              </summary>
              <p class="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                ${product.description}
              </p>
            </details>
            <details class="group p-5">
              <summary class="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900 dark:text-gray-100">
                Product Highlights
                <span class="text-2xl text-pink-600 group-open:rotate-45">+</span>
              </summary>
              <ul class="mt-4 list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                <li>Pure cotton comfort for daily wear.</li>
                <li>Easy to style with jeans, trousers, or ethnic bottoms.</li>
                <li>Lightweight fabric designed for Indian weather.</li>
              </ul>
            </details>
            <details class="group p-5">
              <summary class="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900 dark:text-gray-100">
                Fabric & Care
                <span class="text-2xl text-pink-600 group-open:rotate-45">+</span>
              </summary>
              <p class="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Hand wash separately in cold water. Dry in shade to preserve color and print.
              </p>
            </details>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-14 max-w-7xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-pink-100 dark:bg-gray-800 dark:ring-gray-700">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600 dark:text-pink-400">
              Customer Reviews
            </p>
            <h2 class="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Ratings & Reviews
            </h2>
          </div>
          <div class="text-amber-400">
            ${renderStars(Math.round(Number(product.rating)))} <span class="text-sm font-medium text-gray-600 dark:text-gray-400">${product.rating}/5</span>
          </div>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
          ${product.reviews
            .map(
              (review) => `
                <div class="rounded-lg bg-pink-50 p-5 dark:bg-gray-900">
                  <div class="text-amber-400">${renderStars(review.stars)}</div>
                  <p class="mt-3 text-gray-700 dark:text-gray-300">
                    ${review.text}
                  </p>
                  <p class="mt-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    ${review.name}
                  </p>
                </div>
              `,
            )
            .join("")}
        </div>

        <form id="reviewForm" class="mt-8 grid gap-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">
            Add Your Review
          </h3>
          <select
            id="reviewRating"
            class="rounded-lg border border-pink-100 bg-white px-4 py-3 text-gray-900 focus:border-pink-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          >
            <option value="">Select rating</option>
            <option value="5">★★★★★ - Excellent</option>
            <option value="4">★★★★☆ - Good</option>
            <option value="3">★★★☆☆ - Average</option>
            <option value="2">★★☆☆☆ - Poor</option>
            <option value="1">★☆☆☆☆ - Bad</option>
          </select>
          <textarea
            id="reviewText"
            rows="4"
            class="rounded-lg border border-pink-100 bg-white px-4 py-3 text-gray-900 focus:border-pink-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            placeholder="Write your review..."
          ></textarea>
          <button
            type="submit"
            class="w-full rounded-lg bg-pink-600 px-8 py-3 font-semibold text-white shadow-md hover:bg-pink-700 sm:w-fit"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  `;

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("#sizeChartToggle");

    if (!toggle) {
      return;
    }

    const sizeChartPanel = document.getElementById("sizeChartPanel");

    if (!sizeChartPanel) {
      return;
    }

    const isOpening = sizeChartPanel.classList.contains("hidden");
    sizeChartPanel.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(isOpening));

    if (isOpening) {
      sizeChartPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  const sizeOptions = document.querySelectorAll(".size-option");
  let selectedSize = "";

  sizeOptions.forEach((button) => {
    button.addEventListener("click", () => {
      selectedSize = button.dataset.size || "";
      sizeOptions.forEach((option) => {
        option.classList.remove("border-pink-600", "bg-pink-600", "text-white");
      });
      button.classList.add("border-pink-600", "bg-pink-600", "text-white");
    });
  });

  let quantity = 1;
  const quantityValue = document.getElementById("quantityValue");
  const decreaseQty = document.getElementById("decreaseQty");
  const increaseQty = document.getElementById("increaseQty");

  function updateQuantity(nextQuantity) {
    quantity = Math.max(1, Math.min(10, nextQuantity));

    if (quantityValue) {
      quantityValue.textContent = quantity;
    }
  }

  if (decreaseQty) {
    decreaseQty.addEventListener("click", () => {
      updateQuantity(quantity - 1);
    });
  }

  if (increaseQty) {
    increaseQty.addEventListener("click", () => {
      updateQuantity(quantity + 1);
    });
  }

  document.querySelectorAll("[data-auth-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.authAction || "continue";

      if (!requireLogin(action)) {
        return;
      }

      if (!selectedSize) {
        alert("Please select a size before continuing.");
        return;
      }

      addToCart(product, selectedSize, quantity);

      if (action === "order now") {
        window.location.href = "cart.html";
        return;
      }

      alert(
        `${product.name} (${selectedSize}, Qty: ${quantity}) added to cart.`,
      );
    });
  });

  const reviewForm = document.getElementById("reviewForm");

  if (reviewForm) {
    reviewForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!requireLogin("add a review")) {
        return;
      }

      alert("Thank you. Your review has been submitted.");
      reviewForm.reset();
    });
  }

  const mainProductImage = document.getElementById("mainProductImage");
  const productImageFrame = document.getElementById("productImageFrame");
  const productThumbs = document.querySelectorAll(".product-thumb");

  productThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const selectedImage = thumb.dataset.image;

      if (mainProductImage && selectedImage) {
        mainProductImage.src = selectedImage;
      }

      productThumbs.forEach((item) => {
        item.classList.remove("border-pink-500", "ring-2", "ring-pink-300");
      });
      thumb.classList.add("border-pink-500", "ring-2", "ring-pink-300");
    });
  });

  if (productThumbs[0]) {
    productThumbs[0].classList.add(
      "border-pink-500",
      "ring-2",
      "ring-pink-300",
    );
  }

  if (productImageFrame && mainProductImage) {
    productImageFrame.addEventListener("mousemove", (event) => {
      const rect = productImageFrame.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      mainProductImage.style.transformOrigin = `${x}% ${y}%`;
    });

    productImageFrame.addEventListener("mouseleave", () => {
      mainProductImage.style.transformOrigin = "center center";
    });
  }
}

function requireLogin(action) {
  const isLoggedIn = Boolean(localStorage.getItem("rabikaCurrentUser"));

  if (isLoggedIn) {
    return true;
  }

  localStorage.setItem("rabikaReturnUrl", window.location.href);
  alert(`Please login or sign up to ${action}.`);
  window.location.href = "login.html";
  return false;
}

function getCartItems() {
  return JSON.parse(localStorage.getItem("rabikaCart") || "[]");
}

function saveCartItems(cartItems) {
  localStorage.setItem("rabikaCart", JSON.stringify(cartItems));

  const currentUser = JSON.parse(
    localStorage.getItem("rabikaCurrentUser") || "null",
  );

  if (currentUser) {
    currentUser.cart = cartItems;
    localStorage.setItem("rabikaCurrentUser", JSON.stringify(currentUser));

    const users = getStoredUsers();
    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? currentUser : user,
    );
    localStorage.setItem("rabikaUsers", JSON.stringify(updatedUsers));
  }
}

function addToCart(product, size, quantity) {
  const cartItems = getCartItems();
  const existingItem = cartItems.find(
    (item) => item.productId === product.id && item.size === size,
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({
      productId: product.id,
      size,
      quantity,
      addedAt: Date.now(),
    });
  }

  saveCartItems(cartItems);
}

function getPriceValue(price) {
  return Number(price.replace("&#8377;", "").replace(",", ""));
}

function renderCartPage() {
  const container = document.getElementById("cartItems");
  const summary = document.getElementById("cartSummary");

  if (!container || !summary) {
    return;
  }

  if (!requireLogin("view your cart")) {
    return;
  }

  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="rounded-lg bg-white p-8 text-center shadow-sm dark:bg-gray-800">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Your cart is empty</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Add your favorite Rabika pieces to continue.</p>
        <a href="products.html" class="mt-6 inline-flex rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700">
          Browse Products
        </a>
      </div>
    `;
    summary.innerHTML = "";
    return;
  }

  const detailedItems = cartItems
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean);
  const subtotal = detailedItems.reduce(
    (total, item) => total + getPriceValue(item.product.price) * item.quantity,
    0,
  );
  const shipping = subtotal >= 1500 ? 0 : 99;
  const total = subtotal + shipping;

  container.innerHTML = detailedItems
    .map(
      (item) => `
        <article class="flex flex-col gap-5 rounded-lg bg-white p-5 shadow-sm ring-1 ring-pink-100 dark:bg-gray-800 dark:ring-gray-700 sm:flex-row">
          <img
            src="${item.product.image}"
            alt="${item.product.name}"
            class="h-40 w-full rounded-md object-cover sm:w-32"
            onerror="this.onerror=null; this.src='${logoFallback}';"
          />
          <div class="flex flex-1 flex-col justify-between gap-4">
            <div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">${item.product.name}</h2>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Size: ${item.size}</p>
              <p class="mt-2 font-bold text-pink-600 dark:text-pink-400">${item.product.price}</p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button data-cart-decrease="${item.productId}" data-size="${item.size}" class="rounded-md border border-pink-100 px-3 py-2 font-semibold hover:bg-pink-50 dark:border-gray-700 dark:hover:bg-gray-700">-</button>
              <span class="min-w-8 text-center font-semibold">${item.quantity}</span>
              <button data-cart-increase="${item.productId}" data-size="${item.size}" class="rounded-md border border-pink-100 px-3 py-2 font-semibold hover:bg-pink-50 dark:border-gray-700 dark:hover:bg-gray-700">+</button>
              <button data-cart-remove="${item.productId}" data-size="${item.size}" class="ml-auto font-semibold text-pink-600 hover:text-pink-700 dark:text-pink-400">Remove</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  summary.innerHTML = `
    <div class="rounded-lg bg-white p-6 shadow-sm ring-1 ring-pink-100 dark:bg-gray-800 dark:ring-gray-700">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Order Summary</h2>
      <div class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
        <div class="flex justify-between"><span>Subtotal</span><span>&#8377;${subtotal.toFixed(2)}</span></div>
        <div class="flex justify-between"><span>Shipping</span><span>${shipping === 0 ? "Free" : `&#8377;${shipping.toFixed(2)}`}</span></div>
        <div class="border-t border-pink-100 pt-3 text-lg font-bold text-gray-900 dark:border-gray-700 dark:text-gray-100">
          <div class="flex justify-between"><span>Total</span><span>&#8377;${total.toFixed(2)}</span></div>
        </div>
      </div>
      <button class="mt-6 w-full rounded-lg bg-gradient-to-r from-pink-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg hover:from-pink-700 hover:to-fuchsia-700">
        Proceed to Checkout
      </button>
    </div>
  `;

  bindCartActions();
}

function bindCartActions() {
  document.querySelectorAll("[data-cart-increase]").forEach((button) => {
    button.addEventListener("click", () => {
      updateCartQuantity(button.dataset.cartIncrease, button.dataset.size, 1);
    });
  });

  document.querySelectorAll("[data-cart-decrease]").forEach((button) => {
    button.addEventListener("click", () => {
      updateCartQuantity(button.dataset.cartDecrease, button.dataset.size, -1);
    });
  });

  document.querySelectorAll("[data-cart-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      removeCartItem(button.dataset.cartRemove, button.dataset.size);
    });
  });
}

function updateCartQuantity(productId, size, delta) {
  const cartItems = getCartItems()
    .map((item) =>
      item.productId === productId && item.size === size
        ? { ...item, quantity: item.quantity + delta }
        : item,
    )
    .filter((item) => item.quantity > 0);

  saveCartItems(cartItems);
  renderCartPage();
}

function removeCartItem(productId, size) {
  const cartItems = getCartItems().filter(
    (item) => !(item.productId === productId && item.size === size),
  );

  saveCartItems(cartItems);
  renderCartPage();
}

function setupAuthPages() {
  document.querySelectorAll("[data-toggle-password]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.togglePassword);

      if (!input) {
        return;
      }

      const shouldShow = input.type === "password";
      input.type = shouldShow ? "text" : "password";
      button.textContent = shouldShow ? "Hide" : "Show";
    });
  });

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;
      const users = getStoredUsers();
      const user = users.find(
        (item) => item.email === email && item.password === password,
      );

      if (!user) {
        alert("Invalid email or password. Please try again.");
        return;
      }

      loginUser(user);
    });
  }

  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const user = {
        id: Date.now(),
        name: document.getElementById("signupName").value.trim(),
        email: document.getElementById("signupEmail").value.trim(),
        phone: document.getElementById("signupPhone").value.trim(),
        password: document.getElementById("signupPassword").value,
        address: document.getElementById("signupAddress").value.trim(),
        city: document.getElementById("signupCity").value.trim(),
        pincode: document.getElementById("signupPincode").value.trim(),
        cart: [],
        orders: [],
        reviews: [],
        provider: "email",
      };
      const users = getStoredUsers();

      if (users.some((item) => item.email === user.email)) {
        alert("An account with this email already exists. Please login.");
        return;
      }

      users.push(user);
      localStorage.setItem("rabikaUsers", JSON.stringify(users));
      loginUser(user);
    });
  }
}

function getStoredUsers() {
  return JSON.parse(localStorage.getItem("rabikaUsers") || "[]");
}

function loginUser(user) {
  localStorage.setItem("rabikaCurrentUser", JSON.stringify(user));
  localStorage.setItem("rabikaUser", "logged-in");

  const returnUrl = localStorage.getItem("rabikaReturnUrl");
  localStorage.removeItem("rabikaReturnUrl");
  window.location.href = returnUrl || "index.html";
}

function setupContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = {
      id: Date.now(),
      name: document.getElementById("contactName").value.trim(),
      email: document.getElementById("contactEmail").value.trim(),
      message: document.getElementById("contactMessage").value.trim(),
      submittedAt: new Date().toISOString(),
    };
    const messages = JSON.parse(localStorage.getItem("rabikaMessages") || "[]");
    const status = document.getElementById("contactStatus");

    messages.push(message);
    localStorage.setItem("rabikaMessages", JSON.stringify(messages));
    contactForm.reset();

    if (status) {
      status.textContent =
        "Thank you. Your message has been saved and we will get back to you soon.";
      status.classList.remove("hidden");
    }
  });
}
