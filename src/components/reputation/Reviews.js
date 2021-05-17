import React from 'react'

// components importing
import ReviewItem from './ReviewItem'

export default function Reviews() {
    return (
        <div className="owl-carousel-reviews owl-theme">

            <ReviewItem
                img="https://du3vkre908mr5.cloudfront.net/img/testimonials/syed_balkhi.jpg"
                name="Syed Balkhi"
                social="http://www.wpbeginner.com"
                body="SiteGround is a great hosting solution for all your WordPress projects - both new and established ones. The service they provide is stable, secure and super fast thanks to the special tools they've developed in-house for WordPress users."
                isLink={true}
            />

            <ReviewItem
                img="https://d3fjrnfgbgznt3.cloudfront.net/img/testimonials/joost_de_valk.jpg"
                name="Joost de Valk"
                social="Yoast SEO Founder and CPO"
                body="We keep track of which hosts we get a lot of support requests for, so we can reach out to them. We had a hard time finding SiteGround in that list as we had so few complaints from customers hosted with them."
            />

            <ReviewItem
                img="https://damt7w3yoa0t2.cloudfront.net/img/testimonials/jenny_wong.jpg"
                name="Jenny Wong"
                social="Engineering Manager at Human Made"
                body="What I like about SiteGround is the support is super friendly and attentive. I also love how easy it is that I work on my site locally, push to GitHub and it just magically appears on the server. I really appreciate not having to think about the site and the upgrades too."
            />

            <ReviewItem
                img="https://du3vkre908mr5.cloudfront.net/img/testimonials/matt_cromwell.jpg"
                name="Matt Cromwell"
                social="https://mattcromwell.com/"
                body="I can't say enough good things about SiteGround. I highly recommend their GoGeek shared hosting platform if you are a developer on a budget but still want advanced features like staging, GitHub integration, and of course the SuperCacher."
                isLink={true}
            />

            <ReviewItem
                img="https://d3fjrnfgbgznt3.cloudfront.net/img/testimonials/rian_rietveld.jpg"
                name="Rian Rietveld"
                social="Senior Accessibility Consultant with Level Level"
                body="The SiteGround support team keeps amazing me. I love the chat function, where I always get a prompt answer and help, in my own timezone. Even if a question take longer to answer, I’m reassured that they will return with a solution."
            />

            <ReviewItem
                img="https://damt7w3yoa0t2.cloudfront.net/img/testimonials/andrey_savchenko.jpg"
                name="Andrey Savchenko"
                social="WordPress Developer"
                body="I am passionate about web performance. It takes a hosting committed to performance to match that passion. SG Optimizer delivers powerful cache for WordPress data, assets, and pages with a flip of a switch. Even on the shared plans!"
            />

            <ReviewItem
                img="https://du3vkre908mr5.cloudfront.net/img/testimonials/monique_dubbleman.jpg"
                name="Monique Dubbleman"
                social="Independent designer at BOEmedia"
                body="I moved all my client’s WordPress websites to SiteGround hosting a few years ago and it was the best decision I ever made. I can now easily add new clients, new websites, SSL certificates and other features from one dashboard. Through the staging environment, it’s easy to test new features on your website. With one click you can upload it to the production site. If this fails after all, there’s a daily backup that covers you with a one click restore option."
            />

            <ReviewItem
                img="https://d3fjrnfgbgznt3.cloudfront.net/img/testimonials/rian_kinney.jpg"
                name="Rian Kinney"
                social="Founding Attorney, Kinney Firm"
                body="I have been a happy customer of SiteGround for 2 years now. From their easy to use migrator tool that quickly transferred domains from another platform, to their automatic WP updates that assist with maintaining the functionality of my sites, they have made hosting easy for someone with a non-technical background"
            />

        </div>
    )
}
